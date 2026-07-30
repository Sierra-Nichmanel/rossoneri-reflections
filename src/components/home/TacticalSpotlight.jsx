import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { urlFor } from "../../services/sanity";

export default function TacticalSpotlight({ articles }) {
  if (!articles.length) return null;

  const article = articles[0];

  return (
    <section className="bg-[#111111] py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src={urlFor(article.coverImage).width(1200).height(900).url()}
            alt={article.title}
            className="h-[650px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
            {(article.tags || []).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
            Tactical Spotlight
          </p>

          <h2 className="mt-6 font-['Merriweather'] text-5xl font-black leading-tight">
            {article.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            {article.excerpt}
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="font-['Merriweather'] text-4xl font-black text-[#C8102E]">
                {article.formation}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Formation
              </p>
            </div>

            <div>
              <h3 className="font-['Merriweather'] text-4xl font-black text-[#C8102E]">
                {(article.tags || []).length}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Tactical Themes
              </p>
            </div>

            <div>
              <h3 className="font-['Merriweather'] text-4xl font-black text-[#C8102E]">
                {article.teamRating ?? "-"}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Team Rating
              </p>
            </div>
          </div>

          <Link
            to={`/articles/${article.slug.current}`}
            className="group mt-14 inline-flex items-center gap-3 rounded-xl border border-[#C8102E] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#C8102E]"
          >
            Read Tactical Analysis
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
