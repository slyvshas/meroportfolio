import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sanity } from '../sanityClient';
import BlogPost from './BlogPost';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Current slug:', slug); // Debug log
    console.log('Slug type:', typeof slug);
    console.log('Slug length:', slug?.length);
    
    // Reset states when slug changes
    setLoading(true);
    setError(null);
    setPost(null);
    
    if (!slug || slug === 'no-slug') {
      console.error('Slug is null, undefined, or invalid');
      setError('Invalid blog post URL');
      setLoading(false);
      return;
    }
    
    sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        author,
        "authorName": author->name,
        mainImage{asset->{url}},
        publishedAt,
        _createdAt,
        _updatedAt,
        body,
        "categories": categories[]->{
          _id,
          title,
          "slug": slug.current
        }
      }`,
      { slug }
    ).then((data) => {
      console.log('Fetched blog post data:', data);

      if (data) {
        data.author = data.authorName || data.author || 'Unknown Author';
        data.publishedAt = data.publishedAt || data._createdAt || data._updatedAt;
        setPost(data);
      } else {
        setError('Blog post not found');
      }
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching blog post:', error);
      setError('Failed to load blog post');
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-32">
        <div className="inline-flex items-center gap-3 bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-8 shadow-xl">
          <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"></div>
          LOADING ARTICLE
        </div>
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-32 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
          <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full"></div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Error Loading Article</h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mb-6">
          {error}
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-200"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-32 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Article Not Found</h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-200"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return <BlogPost post={post} />;
}