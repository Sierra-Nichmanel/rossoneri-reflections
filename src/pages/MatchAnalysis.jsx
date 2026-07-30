import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import ArticleCard from "../components/articles/ArticleCard";
import { getMatchAnalysis } from "../services/queries";
import { urlFor } from "../services/sanity";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function MatchAnalysis() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMatchAnalysis().then(setArticles);
  }, []);

  if (!articles.length) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#0B0B0B] pt-36 text-center">
          <h2 className="text-3xl font-bold">Loading...</h2>
        </div>
      </Layout>
    );
  }

  const hero = articles[0];
  const remaining = articles.slice(1);

  return (
    <Layout>
      <SEO
        title="Match Analysis"
        description="Detailed AC Milan match analysis covering tactics, key moments and player performances."
        image="/logo.png"
        url={window.location.href}
      />
      <section className="bg-[#0B0B0B] pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">
            Match Analysis
          </p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            Every Match, Explained.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Tactical breakdowns, key moments, strategic adjustments and
            performance analysis from every AC Milan match.
          </p>

          <Link
            to={`/articles/${hero.slug.current}`}
            className="group mt-20 grid overflow-hidden rounded-3xl bg-[#151515] lg:grid-cols-2"
          >
            <img
              src={urlFor(hero.coverImage).width(1400).height(900).url()}
              alt={hero.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="flex flex-col justify-center p-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8102E]">
                {hero.category.title}
              </span>

              <h2 className="mt-5 font-['Merriweather'] text-5xl font-black leading-tight">
                {hero.title}
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">{hero.excerpt}</p>

              <div className="mt-8 text-sm uppercase tracking-[0.15em] text-zinc-500">
                {hero.author.name} •{" "}
                {new Date(hero.publishedAt).toLocaleDateString()}
              </div>

              <div className="mt-10 inline-flex items-center gap-3 text-[#C8102E]">
                Read Analysis
                <FiArrowRight />
              </div>
            </div>
          </Link>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {remaining.map((article) => (
              <ArticleCard
                key={article._id}
                slug={article.slug.current}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category.title}
                image={article.coverImage}
                author={article.author.name}
                date={new Date(article.publishedAt).toLocaleDateString()}
                readingTime="8 min read"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
