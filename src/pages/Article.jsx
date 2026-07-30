import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { portableTextComponents } from "../components/articles/PortableTextComponent";
import SEO from "../components/seo/SEO";

import Layout from "../components/layout/Layout";
import ReadingProgress from "../components/articles/ReadingProgress";
import { calculateReadingTime } from "../utils/readingTime";
import extractHeadings from "../utils/extractHeadings";

import TableOfContents from "../components/articles/TableOfContents";
import AuthorCard from "../components/articles/AuthorCard";
import ShareButtons from "../components/articles/ShareButtons";

import {
  getArticle,
  getAdjacentArticles,
  getRelatedArticles,
} from "../services/queries";

import { urlFor } from "../services/sanity";

export default function Article() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [adjacent, setAdjacent] = useState(null);

  useEffect(() => {
    async function loadArticle() {
      const data = await getArticle(slug);

      if (!data) return;

      setArticle(data);

      const [relatedArticles, adjacentArticles] = await Promise.all([
        getRelatedArticles(data.category.title, data.slug.current),
        getAdjacentArticles(data.publishedAt),
      ]);

      setRelated(relatedArticles);
      setAdjacent(adjacentArticles);
    }

    loadArticle();
  }, [slug]);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#0B0B0B] pt-40 text-center">
          <h2 className="text-4xl font-bold">Loading...</h2>
        </div>
      </Layout>
    );
  }

    return (
      <Layout>
        <SEO
          title={article.title}
          description={article.excerpt}
          image={
            article.coverImage
              ? urlFor(article.coverImage).width(1200).url()
              : "/logo.png"
          }
          url={window.location.href}
        />
        <ReadingProgress />

        <article className="bg-[#0B0B0B] pt-28">
          {/* HERO */}

          <section className="mx-auto max-w-6xl px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-[#C8102E]"
            >
              <FiArrowLeft />
              Back Home
            </Link>

            <p className="mt-10 uppercase tracking-[0.35em] text-[#C8102E]">
              {article.category.title}
            </p>

            <h1 className="mt-6 font-['Merriweather'] text-6xl font-black leading-tight">
              {article.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
              {article.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-zinc-500">
              <span>{article.author.name}</span>

              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>

              <span>{calculateReadingTime(article.content)}</span>
            </div>
          </section>

          {/* COVER IMAGE */}

          <section className="mx-auto mt-20 max-w-7xl px-8">
            <img
              src={urlFor(article.coverImage).width(1600).height(900).url()}
              alt={article.title}
              className="w-full rounded-3xl object-cover"
            />
          </section>

          {/* CONTENT */}

          <section className="mx-auto max-w-7xl px-8 py-24">
            <div className="grid gap-12 xl:grid-cols-[80px_1fr_280px]">
              <ShareButtons title={article.title} />

              <div>
                <PortableText
                  value={article.content}
                  components={portableTextComponents}
                />

                <AuthorCard author={article.author} />
              </div>

              <TableOfContents headings={extractHeadings(article.content)} />
            </div>
          </section>

          {/* PREVIOUS / NEXT */}

          <section className="mx-auto max-w-6xl border-y border-white/10 px-8 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                {adjacent?.previous && (
                  <>
                    <p className="mb-3 uppercase tracking-widest text-zinc-500">
                      Previous
                    </p>

                    <Link
                      to={`/articles/${adjacent.previous.slug.current}`}
                      className="text-3xl font-black hover:text-[#C8102E]"
                    >
                      {adjacent.previous.title}
                    </Link>
                  </>
                )}
              </div>

              <div className="text-right">
                {adjacent?.next && (
                  <>
                    <p className="mb-3 uppercase tracking-widest text-zinc-500">
                      Next
                    </p>

                    <Link
                      to={`/articles/${adjacent.next.slug.current}`}
                      className="text-3xl font-black hover:text-[#C8102E]"
                    >
                      {adjacent.next.title}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* RELATED */}

          <section className="mx-auto max-w-7xl px-8 py-24">
            <h2 className="mb-14 font-['Merriweather'] text-5xl font-black">
              Related Articles
            </h2>

            <div className="grid gap-8 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item._id}
                  to={`/articles/${item.slug.current}`}
                  className="group overflow-hidden rounded-3xl bg-[#151515]"
                >
                  <img
                    src={urlFor(item.coverImage).width(800).height(500).url()}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#C8102E]">
                      {item.category.title}
                    </p>

                    <h3 className="mt-4 font-['Merriweather'] text-2xl font-black group-hover:text-[#C8102E]">
                      {item.title}
                    </h3>

                    <div className="mt-6 inline-flex items-center gap-2 text-[#C8102E]">
                      Read Article
                      <FiArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </Layout>
    );
}
