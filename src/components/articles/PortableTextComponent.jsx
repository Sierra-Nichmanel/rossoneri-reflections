import { urlFor } from "../../services/sanity";

export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-14">
        <img
          src={urlFor(value).width(1400).url()}
          alt={value.alt || ""}
          className="w-full rounded-3xl"
        />

        {value.caption && (
          <figcaption className="mt-4 text-center text-sm italic text-zinc-500">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="mt-16 mb-8 font-['Merriweather'] text-5xl font-black leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children, value }) => (
      <h2
        id={value?._key}
        className="mt-20 mb-8 scroll-mt-32 font-['Merriweather'] text-4xl font-black"
      >
        {children}
      </h2>
    ),

    h3: ({ children, value }) => (
      <h3
        id={value?._key}
        className="mt-20 mb-8 scroll-mt-32 font-['Merriweather'] text-4xl font-black"
      >
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="mb-8 text-xl leading-10 text-zinc-300">{children}</p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-14 border-l-4 border-[#C8102E] pl-8 text-2xl italic leading-10 text-zinc-300">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-10 ml-8 list-disc space-y-4 text-xl text-zinc-300">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-10 ml-8 list-decimal space-y-4 text-xl text-zinc-300">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#C8102E] underline underline-offset-4"
      >
        {children}
      </a>
    ),

    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
  },
};
