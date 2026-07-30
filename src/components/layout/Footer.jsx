import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          <div className="max-w-lg">
            <h2 className="font-['Merriweather'] text-3xl font-black">
              Rossoneri Reflections
            </h2>

            <div className="mt-4 h-1 w-16 rounded bg-[#C8102E]" />

            <p className="mt-8 leading-8 text-zinc-400">
              Match analysis, tactical breakdowns, player ratings and long-form
              editorial stories celebrating the rich football heritage of AC
              Milan.
            </p>
          </div>

          <div>
            <h3 className="mb-6 uppercase tracking-[0.25em] text-sm text-white">
              Connect
            </h3>

            <div className="flex gap-6 text-2xl">
              <a href="#">
                <FaXTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col gap-3 text-sm text-zinc-500 md:flex-row md:justify-between">
          <p>© 2026 Rossoneri Reflections.</p>

          <p>
            Unofficial AC Milan fan publication. Not affiliated with AC Milan.
          </p>
        </div>
      </div>
    </footer>
  );
}
