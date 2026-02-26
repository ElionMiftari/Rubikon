import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { signin } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await signin(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signin failed.');
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">Sign In</h2>
      <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-5">
        <input className="w-full rounded border p-3 dark:bg-slate-900" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full rounded border p-3 dark:bg-slate-900" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="w-full rounded-lg bg-brand-500 py-2 text-white hover:bg-brand-600">Sign In</button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </section>
  );
}
