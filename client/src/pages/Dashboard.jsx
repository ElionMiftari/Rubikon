import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="glass rounded-2xl p-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="mt-4">Welcome back, <strong>{user?.username}</strong>. Your Rubikon account is active.</p>
      </div>
    </section>
  );
}
