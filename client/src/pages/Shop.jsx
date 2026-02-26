import { useMemo, useState } from 'react';
import CubeCard from '../components/CubeCard';
import { cubeTypes } from '../data/cubes';

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (cube) => setCart((prev) => [...prev, cube]);
  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <h2 className="text-3xl font-bold">Pricing / Shop</h2>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {cubeTypes.map((cube) => (
            <CubeCard
              key={cube.id}
              cube={cube}
              action={<button onClick={() => addToCart(cube)} className="w-full rounded-lg bg-brand-500 px-3 py-2 text-white hover:bg-brand-600">Add to Cart</button>}
            />
          ))}
        </div>
        <aside className="glass h-fit rounded-2xl p-5">
          <h3 className="mb-4 text-xl font-semibold">Cart Summary</h3>
          <ul className="space-y-2 text-sm">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex items-center justify-between gap-2 rounded border p-2 dark:border-slate-700">
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(index)} className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
        </aside>
      </div>
    </section>
  );
}
