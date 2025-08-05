// src/queries.js
export const postsQuery = `
  *[_type == "post"]{
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
  } | order(publishedAt desc)
`;