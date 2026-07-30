import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { urlFor } from "../../services/sanity";

export default function ArticleCard({
  title,
  category,
  excerpt,
  image,
  author,
  date,
  readingTime,
  slug,
}) {
  return (
    <Link to={`/articles/${slug}`}>
      <article className="group overflow-hidden rounded-3xl border border-white/5 bg-[#141414] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8102E]/40">
        <div className="overflow-hidden">
          <img
            src={urlFor(image).width(800).height(500).fit("crop").url()}
            alt={title}
            className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8102E]">
            {category}
          </span>

          <h3 className="mt-4 font-['Merriweather'] text-3xl font-black leading-tight transition group-hover:text-[#C8102E]">
            {title}
          </h3>

          <p className="mt-5 leading-8 text-zinc-400">{excerpt}</p>

          <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
            <div className="text-sm text-zinc-500">
              <p>{author}</p>
              <p>
                {date} • {readingTime}
              </p>
            </div>

            <button className="rounded-full border border-white/10 p-3 transition hover:border-[#C8102E] hover:bg-[#C8102E]">
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
