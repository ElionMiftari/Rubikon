import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword || form.password.length < 6) {
      setError('Passwords must match and be at least 6 characters.');
      return;
    }
    try {
      await signup(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <section className="mx-auto max-w-md px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">Sign Up</h2>
      <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-5">
        <input className="w-full rounded border p-3 dark:bg-slate-900" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="w-full rounded border p-3 dark:bg-slate-900" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full rounded border p-3 dark:bg-slate-900" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input className="w-full rounded border p-3 dark:bg-slate-900" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
        <button className="w-full rounded-lg bg-brand-500 py-2 text-white hover:bg-brand-600">Create Account</button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </section>
  );
}
