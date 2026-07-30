const filters = [
  "All",
  "Match Analysis",
  "Tactical",
  "Player Ratings",
  "Features",
];

export default function CategoryFilter() {
  return (
    <section className="bg-[#111111] pb-16">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-8">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition ${
              index === 0
                ? "bg-[#C8102E]"
                : "border border-white/10 hover:border-[#C8102E]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
