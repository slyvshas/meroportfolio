
import React from 'react';
import { PortableText } from '@portabletext/react';

export default function BlogPost({ post }) {
  if (!post) return null;

  return (
    <article className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-8 shadow-lg">
      {post.categories && post.categories.length > 0 && (
        <div className="mb-2">
          {post.categories.map(cat => (
            <span key={cat._id} className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">
              {cat.title}
            </span>
          ))}
        </div>
      )}
      <h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>
      <p className="text-white/70 mb-4">
        <strong>By:</strong> {post.author} <br />
        <strong>Published:</strong> {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <div className="blog-body text-white/90">
        <PortableText value={post.body} />
      </div>
    </article>
  );
} 