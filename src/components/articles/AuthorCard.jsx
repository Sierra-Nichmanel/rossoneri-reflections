import { urlFor } from "../../services/sanity";

export default function AuthorCard({ author }) {
  return (
    <section className="mt-24 rounded-3xl border border-white/10 bg-[#121212] p-10">
      <div className="flex items-center gap-8">
        <img
          src={urlFor(author.image).width(180).height(180).url()}
          alt={author.name}
          className="h-24 w-24 rounded-full object-cover"
        />

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#C8102E]">
            About the Author
          </p>

          <h3 className="mt-2 text-3xl font-black">{author.name}</h3>

          <p className="mt-4 leading-8 text-zinc-400">{author.bio}</p>
        </div>
      </div>
    </section>
  );
}
