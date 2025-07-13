import { useEffect, useState } from 'react';
import { sanity } from '../sanityClient';
import { postsQuery } from '../queries';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(postsQuery)
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
} 