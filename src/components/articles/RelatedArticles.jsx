import { useEffect, useState } from "react";

import ArticleCard from "../articles/ArticleCard";

import { getRelatedArticles } from "../../services/queries";

export default function RelatedArticles({ category, slug }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getRelatedArticles(category, slug).then(setArticles);
  }, [category, slug]);

  if (!articles.length) return null;

  return (
    <section className="mt-32">
      <h2 className="mb-12 font-['Merriweather'] text-4xl font-black">
        Continue Reading
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            title={article.title}
            category={article.category.title}
            excerpt={article.excerpt}
            image={article.coverImage}
            author={article.author.name}
            date={new Date(article.publishedAt).toLocaleDateString()}
            readingTime="8 min read"
            slug={article.slug.current}
          />
        ))}
      </div>
    </section>
  );
}
