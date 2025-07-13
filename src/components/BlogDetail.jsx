import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanity } from '../sanityClient';
import BlogPost from './BlogPost';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "author": author->name,
        mainImage{asset->{url}},
        publishedAt,
        body
      }`,
      { slug }
    ).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="text-center text-white py-20">Loading...</div>;
  if (!post) return <div className="text-center text-white py-20">Blog post not found.</div>;

  return (
    <div className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <BlogPost post={post} />
    </div>
  );
} 