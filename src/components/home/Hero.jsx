import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { urlFor } from "../../services/sanity";

export default function Hero({ article }) {
  if (!article) return null;

  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">
      <img
        src={urlFor(article.coverImage).width(2000).height(1200).url()}
        alt={article.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/60 to-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-8 pb-24">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#C8102E] px-4 py-2 text-xs uppercase tracking-[0.25em]">
            {article.category.title}
          </span>

          <h1 className="mt-8 font-['Merriweather'] text-5xl font-black leading-tight md:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
            {article.excerpt}
          </p>

          <div className="mt-10 flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-zinc-300">
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>

          <Link
            to={`/articles/${article.slug.current}`}
            className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[#C8102E] px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            Read Analysis
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
