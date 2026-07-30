import { client } from "./sanity";

const projection = `
{
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  content,
  featured,
  publishedAt,

  competition,
  opponent,
  score,
  formation,
  motm,
  teamRating,
  tags,

  "author": author->{
    name,
    image,
    bio
  },

  "category": category->{
    title
  }
}
`;

export const getArticles = () =>
  client.fetch(`
    *[_type=="article"]
    | order(publishedAt desc)
    ${projection}
  `);

export const getFeaturedArticles = () =>
  client.fetch(`
    *[_type=="article" && featured == true]
    | order(publishedAt desc)
    ${projection}
  `);

  export const getMatchAnalysis = () =>
    client.fetch(`
    *[
      _type=="article" &&
      category->title=="Match Analysis"
    ]
    | order(publishedAt desc)
    ${projection}
  `);

  export const getTacticalAnalysis = () =>
    client.fetch(`
    *[
      _type=="article" &&
      category->title=="Tactical Analysis"
    ]
    | order(publishedAt desc)
    ${projection}
  `);

  export const getPlayerRatings = () =>
    client.fetch(`
    *[
      _type=="article" &&
      category->title=="Player Ratings"
    ]
    | order(publishedAt desc)
    ${projection}
  `);

  export const getFeatures = () =>
    client.fetch(`
    *[
      _type=="article" &&
      category->title=="Features"
    ]
    | order(publishedAt desc)
    ${projection}
  `);

export const getArticlesByCategory = (category) =>
  client.fetch(
    `
      *[
        _type=="article" &&
        category->title==$category
      ]
      | order(publishedAt desc)
      ${projection}
    `,
    { category },
  );

export const getArticle = (slug) =>
  client.fetch(
    `
    *[
      _type == "article" &&
      slug.current == $slug
    ][0]
    {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      content,
      publishedAt,
      competition,
      opponent,
      score,
      formation,
      motm,
      teamRating,

      "author": author->{
        name,
        image,
        bio
      },

      "category": category->{
        title
      }
    }
    `,
    { slug },
  );

export const getRelatedArticles = (category, slug) =>
  client.fetch(
    `
      *[
        _type=="article" &&
        category->title==$category &&
        slug.current!=$slug
      ][0...3]
      ${projection}
    `,
    { category, slug },
  );

export const getAdjacentArticles = (publishedAt) =>
  client.fetch(
    `
    {
      "previous":
        *[
          _type=="article" &&
          publishedAt < $publishedAt
        ]
        | order(publishedAt desc)[0]
        {
          title,
          slug
        },

      "next":
        *[
          _type=="article" &&
          publishedAt > $publishedAt
        ]
        | order(publishedAt asc)[0]
        {
          title,
          slug
        }
    }
    `,
    { publishedAt },
  );
