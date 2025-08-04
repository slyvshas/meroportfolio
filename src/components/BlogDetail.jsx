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
      console.log('Fetched blog post data:', data); // Debug log
      
      // Handle both reference and string author fields
      if (data) {
        // Try different author field possibilities
        data.author = data.authorName || data.author || 'Unknown Author';
        console.log('Processed author:', data.author); // Debug log
        
        // Handle date - try multiple date fields
        data.publishedAt = data.publishedAt || data._createdAt || data._updatedAt;
        console.log('Published date (raw):', data.publishedAt); // Debug log
        console.log('Created date:', data._createdAt); // Debug log
        console.log('Updated date:', data._updatedAt); // Debug log
        
        // Validate date format
        if (data.publishedAt) {
          const date = new Date(data.publishedAt);
          console.log('Parsed date:', date); // Debug log
          console.log('Is valid date:', !isNaN(date.getTime())); // Debug log
        }
      }
      setPost(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching blog post:', error);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="text-center text-white py-20">Loading...</div>;
  if (!post) return <div className="text-center text-white py-20">Blog post not found.</div>;

  return (
    <div className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <BlogPost post={post} />
    </div>
  );
} 