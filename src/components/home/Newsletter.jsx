import { FiArrowRight } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="bg-[#0B0B0B] py-32">
      <div className="mx-auto max-w-5xl px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#171717] to-[#0F0F0F] px-8 py-20 text-center md:px-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          <p className="text-sm uppercase tracking-[0.35em] text-[#C8102E]">
            Join The Community
          </p>

          <h2 className="mt-6 font-['Merriweather'] text-4xl font-black md:text-5xl">
            Stay Connected With The Rossoneri
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            Receive match analysis, tactical breakdowns, player ratings, and
            exclusive editorial stories directly in your inbox.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-xl border border-white/10 bg-black/40 px-6 py-4 text-white outline-none focus:border-[#C8102E]"
            />

            <button className="flex items-center justify-center gap-3 rounded-xl bg-[#C8102E] px-8 py-4 font-semibold transition hover:bg-red-700">
              Subscribe
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
