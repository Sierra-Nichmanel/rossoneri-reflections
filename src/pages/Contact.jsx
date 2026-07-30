import Layout from "../components/layout/Layout";
import { FiMail, FiMessageCircle, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-[#0B0B0B] min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-8">
          <p className="uppercase tracking-[0.35em] text-[#C8102E]">Contact</p>

          <h1 className="mt-5 font-['Merriweather'] text-6xl font-black">
            Get In Touch
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Have a tactical discussion, feedback on an article, or a feature
            idea? We'd love to hear from you.
          </p>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <FiMail className="mt-1 text-3xl text-[#C8102E]" />

                <div>
                  <h3 className="text-xl font-bold">Email</h3>

                  <p className="mt-2 text-zinc-400">
                    editor@rossonerireflections.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <FiMessageCircle className="mt-1 text-3xl text-[#C8102E]" />

                <div>
                  <h3 className="text-xl font-bold">Editorial Feedback</h3>

                  <p className="mt-2 text-zinc-400">
                    Match analysis, corrections, or feature suggestions.
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <input
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-[#151515] p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#151515] p-4"
              />

              <input
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-[#151515] p-4"
              />

              <textarea
                rows={8}
                placeholder="Message"
                className="w-full rounded-xl border border-white/10 bg-[#151515] p-4"
              />

              <button className="inline-flex items-center gap-3 rounded-xl bg-[#C8102E] px-8 py-4 font-semibold transition hover:bg-red-700">
                Send Message
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
