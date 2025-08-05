import { useEffect, useState, useCallback } from 'react';
import { publicSanity } from '../sanityClient';
import { postsQuery } from '../queries';
import performanceMonitor from '../utils/performance';

// Simple in-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function usePosts(page = 1, limit = 12) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async (pageNum = 1, postLimit = 12) => {
    const cacheKey = `posts_${pageNum}_${postLimit}`;
    const cached = cache.get(cacheKey);
    
    // Return cached data if still valid
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setPosts(cached.data);
      setLoading(false);
      setHasMore(cached.hasMore);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Calculate offset for pagination
      const offset = (pageNum - 1) * postLimit;
      
      // Modified query with pagination
      const paginatedQuery = `
        {
          "posts": *[_type == "post"] | order(publishedAt desc) [${offset}...${offset + postLimit}] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "author": author->name,
            mainImage{
              asset->{
                url
              }
            },
            publishedAt,
            body,
            "categories": categories[]->{
              _id,
              title,
              "slug": slug.current
            }
          },
          "total": count(*[_type == "post"])
        }
      `;

      // Measure API call performance
      const result = await performanceMonitor.measureApiCall(
        () => publicSanity.fetch(paginatedQuery),
        `fetch_posts_page_${pageNum}`
      );
      
      const newPosts = result.posts || [];
      const totalPosts = result.total || 0;
      const hasMorePosts = offset + postLimit < totalPosts;

      // Cache the result
      cache.set(cacheKey, {
        data: newPosts,
        hasMore: hasMorePosts,
        timestamp: Date.now()
      });

      setPosts(newPosts);
      setHasMore(hasMorePosts);
      setError(null);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(page, limit);
  }, [page, limit, fetchPosts]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPosts(page + 1, limit);
    }
  }, [page, limit, loading, hasMore, fetchPosts]);

  const refreshPosts = useCallback(() => {
    // Clear cache for this page
    const cacheKey = `posts_${page}_${limit}`;
    cache.delete(cacheKey);
    fetchPosts(page, limit);
  }, [page, limit, fetchPosts]);

  return { 
    posts, 
    loading, 
    error, 
    hasMore, 
    loadMore, 
    refreshPosts 
  };
} 