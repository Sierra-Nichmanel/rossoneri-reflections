import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function PlayerRatings({ articles }) {
  if (!articles.length) return null;

  return (
    <section className="bg-[#0B0B0B] py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
              Performance Review
            </p>

            <h2 className="mt-5 font-['Merriweather'] text-5xl font-black">
              Player Ratings
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              Every rating article reviews the tactical performance of Milan's
              players after each match.
            </p>
          </div>

          <Link
            to="/player-ratings"
            className="group hidden items-center gap-2 text-sm uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white sm:flex"
          >
            See More
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/player-ratings"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-zinc-300 transition hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white"
          >
            See More
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article._id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#C8102E]/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8102E]">
                  {article.competition}
                </span>

                <span className="text-sm text-zinc-500">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <div className="mt-10 text-center">
                <h3 className="font-['Merriweather'] text-3xl font-black">
                  Milan
                </h3>

                <div className="my-5 text-5xl font-black">{article.score}</div>

                <h3 className="font-['Merriweather'] text-2xl font-black text-zinc-300">
                  {article.opponent}
                </h3>
              </div>

              <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Formation</span>
                  <span>{article.formation}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">Man of the Match</span>
                  <span className="text-[#C8102E]">{article.motm}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">Team Rating</span>
                  <span className="text-2xl font-black">
                    {article.teamRating}
                  </span>
                </div>
              </div>

              <Link
                to={`/articles/${article.slug.current}`}
                className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-4 text-sm uppercase tracking-[0.2em] transition hover:border-[#C8102E] hover:bg-[#C8102E]"
              >
                View Full Ratings
                <FiArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
