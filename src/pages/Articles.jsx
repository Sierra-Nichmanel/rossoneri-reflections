import { useEffect, useMemo, useState } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import ArticleCard from "../components/articles/ArticleCard";
import { getArticles } from "../services/queries";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  const categories = useMemo(() => {
    const values = articles.map((a) => a.category.title);
    return ["All", ...new Set(values)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const categoryMatch =
        selectedCategory === "All" ||
        article.category.title === selectedCategory;

      const searchMatch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [articles, selectedCategory, search]);

  const featured = filteredArticles[0];
  const remaining = filteredArticles.slice(1);

  return (
    <Layout>
      <SEO
        title="Articles"
        description="Detailed AC Milan match analysis covering tactics, key moments and player performances."
        image="/logo.png"
        url={window.location.href}
      />
      <section className="bg-[#0B0B0B] min-h-screen pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">
            Rossoneri Reflections
          </p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            All Articles
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-400 leading-8">
            Match analysis, tactical breakdowns, player ratings and long-form
            features covering everything AC Milan.
          </p>

          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#141414] px-5 py-4 text-white outline-none focus:border-[#C8102E] lg:max-w-md"
            />

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm uppercase tracking-[0.15em] transition ${
                    selectedCategory === category
                      ? "bg-[#C8102E]"
                      : "border border-white/10 hover:border-[#C8102E]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <div className="mt-20">
              <ArticleCard
                title={featured.title}
                category={featured.category.title}
                excerpt={featured.excerpt}
                image={featured.coverImage}
                author={featured.author.name}
                date={new Date(featured.publishedAt).toLocaleDateString()}
                readingTime="8 min read"
                slug={featured.slug.current}
              />
            </div>
          )}

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {remaining.map((article) => (
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
