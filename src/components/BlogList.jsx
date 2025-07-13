import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const { posts, loading } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="blog-list grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <Link to={`/blog/${post.slug}`} key={post._id} className="block">
          <div className="blog-card bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 shadow-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
            {post.categories && post.categories.length > 0 && (
              <div className="mb-2">
                {post.categories.map(cat => (
                  <span key={cat._id} className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
            <p className="text-white/70 mb-1">
              <strong>By:</strong> {post.author}
            </p>
            <p className="text-white/60 text-sm mb-2">
              <strong>Published:</strong> {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
} 