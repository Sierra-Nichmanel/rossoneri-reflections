import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { urlFor } from "../../services/sanity";

export default function FeaturedGrid({ articles }) {
  if (!articles.length) return null;

  const hero = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
            Editor's Picks
          </p>

          <h2 className="mt-4 font-['Merriweather'] text-5xl font-black">
            Featured Stories
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Link
            to={`/articles/${hero.slug.current}`}
            className="group relative h-[650px] overflow-hidden rounded-3xl"
          >
            <img
              src={urlFor(hero.coverImage).width(1400).height(900).url()}
              alt={hero.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-10">
              <span className="rounded-full bg-[#C8102E] px-4 py-2 text-xs uppercase tracking-[0.25em]">
                {hero.category.title}
              </span>

              <h3 className="mt-6 font-['Merriweather'] text-4xl font-black leading-tight">
                {hero.title}
              </h3>

              <button className="mt-8 flex items-center gap-2 text-white">
                Read Story
                <FiArrowUpRight />
              </button>
            </div>
          </Link>

          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Link
                key={article._id}
                to={`/articles/${article.slug.current}`}
                className="group flex h-[205px] overflow-hidden rounded-3xl bg-[#151515]"
              >
                <img
                  src={urlFor(article.coverImage).width(500).height(400).url()}
                  alt={article.title}
                  className="w-40 object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="flex flex-1 flex-col justify-center p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C8102E]">
                    {article.category.title}
                  </span>

                  <h3 className="mt-4 font-['Merriweather'] text-2xl font-bold leading-snug transition group-hover:text-[#C8102E]">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
