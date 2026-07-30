import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import ArticleCard from "../components/articles/ArticleCard";

import { getFeatures } from "../services/queries";
import { urlFor } from "../services/sanity";

export default function Features() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getFeatures().then(setArticles);
  }, []);

  if (!articles.length) {
    return (
      <Layout>
        <section className="min-h-screen bg-[#0B0B0B] pt-36">
          <div className="mx-auto max-w-7xl px-8">
            <h2 className="text-3xl font-bold">Loading...</h2>
          </div>
        </section>
      </Layout>
    );
  }

  const hero = articles[0];

  const remaining = articles.slice(1);

  return (
    <Layout>
      <SEO
        title="Features"
        description="Detailed AC Milan match analysis covering tactics, key moments and player performances."
        image="/logo.png"
        url={window.location.href}
      />
      <section className="bg-[#0B0B0B] pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">Features</p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            Stories Beyond The Scoreline
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Long-form storytelling exploring AC Milan's players, history,
            culture, identity and the moments that define the Rossoneri.
          </p>

          {/* Main Editorial Story */}

          <Link
            to={`/articles/${hero.slug.current}`}
            className="group relative mt-20 block h-[650px] overflow-hidden rounded-3xl"
          >
            <img
              src={urlFor(hero.coverImage).width(1600).height(1000).url()}
              alt={hero.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 max-w-4xl p-12">
              <span className="rounded-full bg-[#C8102E] px-5 py-2 text-xs uppercase tracking-[0.25em]">
                Featured Story
              </span>

              <h2 className="mt-8 font-['Merriweather'] text-5xl font-black leading-tight">
                {hero.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {hero.excerpt}
              </p>

              <div className="mt-10 flex items-center gap-3 text-[#C8102E]">
                Read Feature
                <FiArrowRight />
              </div>
            </div>
          </Link>

          {/* Remaining Features */}

          <div className="mt-24">
            <h2 className="mb-12 font-['Merriweather'] text-4xl font-black">
              More Stories
            </h2>

            <div className="grid gap-8 lg:grid-cols-3">
              {remaining.map((article) => (
                <ArticleCard
                  key={article._id}
                  slug={article.slug.current}
                  title={article.title}
                  category={article.category.title}
                  excerpt={article.excerpt}
                  image={article.coverImage}
                  author={article.author.name}
                  date={new Date(article.publishedAt).toLocaleDateString()}
                  readingTime="10 min read"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
