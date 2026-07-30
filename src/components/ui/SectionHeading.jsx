export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="font-['Merriweather'] text-4xl font-black">{title}</h2>

      {subtitle && <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p>}
    </div>
  );
}
