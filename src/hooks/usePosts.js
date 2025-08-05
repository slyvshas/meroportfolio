import { useEffect, useState } from 'react';
import { publicSanity } from '../sanityClient';
import { postsQuery } from '../queries';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching posts with query:', postsQuery);
    console.log('Sanity client config:', {
      projectId: publicSanity.config().projectId,
      dataset: publicSanity.config().dataset,
      apiVersion: publicSanity.config().apiVersion,
      useCdn: publicSanity.config().useCdn
    });
    
    // Test 1: Simple count query
    publicSanity.fetch('count(*[_type == "post"])')
      .then((count) => {
        console.log('Total posts count:', count);
      })
      .catch((error) => {
        console.error('Count query error:', error);
      });
    
    // Test 2: Simple post query
    publicSanity.fetch('*[_type == "post"] | order(_createdAt desc) [0...5]')
      .then((testData) => {
        console.log('Simple query result:', testData);
        console.log('Simple query result length:', testData?.length || 0);
      })
      .catch((error) => {
        console.error('Simple query error:', error);
      });
    
    // Main query
    publicSanity.fetch(postsQuery)
      .then((data) => {
        console.log('Fetched posts data:', data);
        console.log('Number of posts fetched:', data?.length || 0);
        setPosts(data || []);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        // If CORS error, try with different configuration
        if (error.message.includes('CORS') || error.message.includes('Access-Control')) {
          console.log('CORS error detected, trying alternative approach...');
          // You can add fallback logic here if needed
        }
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
} 