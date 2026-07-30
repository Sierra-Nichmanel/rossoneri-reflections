import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ArticleCard from "../components/articles/ArticleCard";

import { getArticlesByCategory } from "../services/queries";

export default function CategoryPage() {
  const { category } = useParams();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const formattedCategory = category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    getArticlesByCategory(formattedCategory).then(setArticles);
  }, [category]);

  return (
    <Layout>
      <section className="bg-[#0B0B0B] min-h-screen py-36">
        <div className="mx-auto max-w-7xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">
            Rossoneri Reflections
          </p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black capitalize">
            {category.replace("-", " ")}
          </h1>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
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
        </div>
      </section>
    </Layout>
  );
}
