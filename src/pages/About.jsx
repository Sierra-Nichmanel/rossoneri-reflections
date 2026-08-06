import Layout from "../components/layout/Layout";
import { FiBookOpen, FiTarget, FiUsers } from "react-icons/fi";
import SEO from "../components/seo/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About | Rossoneri Reflections"
        description="Learn about Rossoneri Reflections, an independent AC Milan publication dedicated to tactical analysis, match reports and thoughtful football journalism."
        image="/logo.png"
        url={window.location.href}
      />
      <section className="bg-[#0B0B0B] pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">About</p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            Rossoneri Reflections
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-10 text-zinc-300">
            Rossoneri Reflections is an independent publication dedicated to
            thoughtful AC Milan analysis. We believe football deserves more than
            reactionary headlines and social media hot takes. Every article is
            written to explain not just what happened, but why it happened.
          </p>
        </div>
      </section>

      <section className="bg-[#111111] py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
            <FiTarget className="text-5xl text-[#C8102E]" />

            <h2 className="mt-6 font-['Merriweather'] text-3xl font-black">
              Mission
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Produce tactical, analytical and long-form Milan content that
              rewards readers looking for deeper insight.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
            <FiBookOpen className="text-5xl text-[#C8102E]" />

            <h2 className="mt-6 font-['Merriweather'] text-3xl font-black">
              Philosophy
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Football is a tactical game. Understanding movement, spacing,
              pressing and decision-making tells a richer story than simply
              reading the scoreline.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#181818] p-8">
            <FiUsers className="text-5xl text-[#C8102E]" />

            <h2 className="mt-6 font-['Merriweather'] text-3xl font-black">
              Community
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Built for Rossoneri supporters who enjoy meaningful discussion,
              tactical debate and thoughtful football writing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0B] py-24">
        <div className="mx-auto max-w-5xl px-8">
          <h2 className="font-['Merriweather'] text-5xl font-black">
            Editorial Principles
          </h2>

          <div className="mt-12 space-y-10 text-lg leading-9 text-zinc-400">
            <p>
              We value accuracy over speed, analysis over sensationalism, and
              context over reaction. Every article is researched, structured and
              written with the aim of helping readers understand the game more
              deeply.
            </p>

            <p>
              Rossoneri Reflections exists to celebrate football intelligence,
              tactical evolution and the enduring identity of AC Milan.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
