const blocks = [
  ['Materials', 'Modern cubes use ABS plastic for lightweight durability and smooth turning.'],
  ['Internal Mechanism', 'Corner-cutting tracks and adjustable springs support high-speed solving.'],
  ['Magnets', 'Embedded magnets align layers for better control and consistent moves.'],
  ['Speedcube Design', 'Frosted surfaces, ergonomic pieces, and tension systems optimize performance.'],
  ['Manufacturing Process', 'Injection molding, precision trimming, magnetic assembly, and quality checks.'],
];

export default function Made() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold">How They Are Made</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map(([title, text]) => (
          <article key={title} className="glass rounded-xl p-5">
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
