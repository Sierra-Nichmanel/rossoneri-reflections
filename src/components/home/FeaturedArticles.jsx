import ArticleCard from "../articles/ArticleCard";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedArticles({ articles }) {
  if (!articles.length) return null;

  return (
    <section className="bg-[#111111] py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
            Editorial
          </p>

          <h2 className="mt-5 font-['Merriweather'] text-5xl font-black">
            Featured Articles
          </h2>
          <Link
            to="/features"
            className="group flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white"
          >
            See More
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              category={article.category?.title}
              excerpt={article.excerpt}
              image={article.coverImage}
              author={article.author?.name}
              date={new Date(article.publishedAt).toLocaleDateString()}
              readingTime="10 min read"
              slug={article.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
