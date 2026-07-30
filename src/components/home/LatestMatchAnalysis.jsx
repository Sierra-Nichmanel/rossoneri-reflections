import ArticleCard from "../articles/ArticleCard";

export default function LatestMatchAnalysis({ articles }) {
  if (!articles.length) return null;

  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
            Recent Coverage
          </p>

          <h2 className="mt-4 font-['Merriweather'] text-5xl font-black">
            Latest Match Analysis
          </h2>
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
              readingTime="8 min read"
              slug={article.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
