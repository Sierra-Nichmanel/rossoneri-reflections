import ArticleCard from "./ArticleCard";
// import { articles } from "../../data/articles";

export default function ArticlesGrid() {
  return (
    <section className="bg-[#0B0B0B] py-20">
      <div className="mx-auto max-w-7xl px-8">
        {/* Featured */}

        <ArticleCard {...articles[0]} />

        {/* Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {articles.slice(1).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
