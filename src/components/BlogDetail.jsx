import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sanity } from '../sanityClient';
import BlogPost from './BlogPost';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Current slug:', slug); // Debug log
    console.log('Slug type:', typeof slug);
    console.log('Slug length:', slug?.length);
    
    if (!slug) {
      console.error('Slug is null or undefined');
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

  return <BlogPost post={post} />;
}