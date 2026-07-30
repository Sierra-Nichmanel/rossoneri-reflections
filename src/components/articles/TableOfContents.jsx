import { Link } from "react-scroll";

export default function TableOfContents({ headings }) {
  if (!headings.length) return null;

  return (
    <aside className="sticky top-32 hidden xl:block">
      <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
        <h3 className="mb-6 text-lg font-bold uppercase tracking-[0.2em]">
          Contents
        </h3>

        <div className="space-y-4">
          {headings.map((heading) => (
            <Link
              key={heading.id}
              to={heading.id}
              smooth
              duration={500}
              offset={-120}
              className="block cursor-pointer text-zinc-400 transition hover:text-[#C8102E]"
            >
              {heading.text}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
