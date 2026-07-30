import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <section className="bg-[#111111] pb-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-center rounded-2xl border border-white/10 bg-[#181818] px-6">
          <FiSearch className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-transparent px-4 py-5 outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>
    </section>
  );
}
