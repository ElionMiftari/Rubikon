export default function CubeCard({ cube, action }) {
  return (
    <article className="glass overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-brand-500/20">
      <img src={cube.image} alt={cube.name} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-4">
        <h3 className="text-xl font-semibold">{cube.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{cube.description}</p>
        <div className="flex justify-between text-sm">
          <span>Difficulty: <strong>{cube.difficulty}</strong></span>
          <span>${cube.price.toFixed(2)}</span>
        </div>
        {action}
      </div>
    </article>
  );
}
