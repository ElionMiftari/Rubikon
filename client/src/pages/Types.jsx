import CubeCard from '../components/CubeCard';
import { cubeTypes } from '../data/cubes';

export default function Types() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold">Types of Rubik’s Cubes</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cubeTypes.map((cube) => (
          <CubeCard key={cube.id} cube={cube} />
        ))}
      </div>
    </section>
  );
}
