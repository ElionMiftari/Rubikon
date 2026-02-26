import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold md:text-6xl"
        >
          Unlock the <span className="text-brand-500">Rubik’s Cube</span> Universe
        </motion.h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Explore puzzle types, buy premium cubes, and learn how modern speedcubes are engineered.
        </p>
        <div className="flex gap-3">
          <Link to="/types" className="rounded-lg bg-brand-500 px-5 py-3 text-white hover:bg-brand-600">Explore Types</Link>
          <Link to="/shop" className="rounded-lg border px-5 py-3 hover:border-brand-500">Shop Now</Link>
        </div>
      </div>
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="glass rounded-3xl p-8"
      >
        <img
          src="https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&w=1000&q=80"
          alt="Rubik's Cube"
          className="rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
