import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || form.message.length < 10) {
      setStatus('Please enter valid details. Message must be at least 10 characters.');
      return;
    }
    try {
      await axios.post(`${API_URL}/contact`, form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.response?.data?.message || 'Failed to send message.');
    }
  };

  return (
    <section className="mx-auto max-w-xl px-4 py-12">
      <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>
      <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-5">
        <input className="w-full rounded border p-3 dark:bg-slate-900" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="w-full rounded border p-3 dark:bg-slate-900" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea className="w-full rounded border p-3 dark:bg-slate-900" rows="4" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="w-full rounded-lg bg-brand-500 py-2 text-white hover:bg-brand-600">Send Message</button>
        {status && <p className="text-sm">{status}</p>}
      </form>
    </section>
  );
}
