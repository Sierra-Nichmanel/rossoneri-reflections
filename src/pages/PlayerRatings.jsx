import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import ArticleCard from "../components/articles/ArticleCard";

import { getPlayerRatings } from "../services/queries";
import { urlFor } from "../services/sanity";

export default function PlayerRatings() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getPlayerRatings().then(setArticles);
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
        title="Player Ratings"
        description="Detailed AC Milan match analysis covering tactics, key moments and player performances."
        image="/logo.png"
        url={window.location.href}
      />
      <section className="bg-[#0B0B0B] pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">
            Player Ratings
          </p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            Milan Performance Reports
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Detailed evaluations of every AC Milan performance. Individual
            ratings, tactical roles, decisive moments and match-defining
            contributions.
          </p>

          {/* Featured Match Review */}

          <Link
            to={`/articles/${hero.slug.current}`}
            className="group mt-20 block overflow-hidden rounded-3xl border border-white/10 bg-[#151515]"
          >
            <div className="grid lg:grid-cols-2">
              <img
                src={urlFor(hero.coverImage).width(1400).height(900).url()}
                alt={hero.title}
                className="h-full min-h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="flex flex-col justify-center p-12">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8102E]">
                  Latest Match Review
                </span>

                <h2 className="mt-6 font-['Merriweather'] text-5xl font-black leading-tight">
                  {hero.title}
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">{hero.excerpt}</p>

                {/* Match Data */}

                <div className="mt-10 grid grid-cols-2 gap-5">
                  <div className="rounded-xl bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                      Formation
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {hero.formation || "N/A"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                      Team Rating
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#C8102E]">
                      {hero.teamRating || "N/A"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                      Man Of Match
                    </p>

                    <p className="mt-2 font-bold">{hero.motm || "N/A"}</p>
                  </div>

                  <div className="rounded-xl bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-widest text-zinc-500">
                      Score
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {hero.score || "-"}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3 text-[#C8102E]">
                  Read Full Ratings
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </Link>

          {/* Previous Ratings */}

          <div className="mt-24">
            <div className="mb-12 flex items-center gap-3">
              <FiStar className="text-[#C8102E]" />

              <h2 className="font-['Merriweather'] text-4xl font-black">
                Previous Reviews
              </h2>
            </div>

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
                  readingTime="7 min read"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
