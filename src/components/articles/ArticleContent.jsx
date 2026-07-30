export default function ArticleContent() {
  return (
    <section className="bg-[#0B0B0B]">
      <div className="mx-auto max-w-4xl px-8 py-24">
        <div className="space-y-8 text-lg leading-9 text-zinc-300">
          <p>
            AC Milan's victory was not built solely on moments of brilliance. It
            emerged from disciplined spacing, intelligent pressing, and complete
            midfield superiority.
          </p>

          <p>
            From the opening whistle, Milan controlled the central channels by
            creating constant passing triangles that forced Roma into defensive
            adjustments.
          </p>

          <blockquote className="border-l-4 border-[#C8102E] pl-8 font-['Merriweather'] text-3xl font-bold leading-relaxed text-white italic">
            "Control is not about possession alone. It is about deciding where
            the opponent is allowed to play."
          </blockquote>

          <p>
            Reijnders repeatedly drifted into the half-space, dragging defenders
            and creating space for overlapping full-backs.
          </p>

          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=80"
            alt="Tactical Illustration"
            className="rounded-3xl"
            loading="lazy"
          />

          <h2 className="font-['Merriweather'] text-4xl font-black text-white">
            Pressing Triggers
          </h2>

          <p>
            Milan's press began whenever Roma attempted to circulate possession
            through the pivot. This predictable trigger allowed Milan to
            compress space and force hurried decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
