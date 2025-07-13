// src/queries.js
export const postsQuery = `
  *[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    "author": author->name,
    mainImage{
      asset->{
        url
      }
    },
    publishedAt,
    body,
    categories[]->{
      _id,
      title,
      slug
    }
  } | order(publishedAt desc)
`;