export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-300 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Rubikon. Solve smarter.</p>
        <div className="flex gap-4">
          <a href="https://instagram.com" className="hover:text-brand-500">Instagram</a>
          <a href="https://youtube.com" className="hover:text-brand-500">YouTube</a>
          <a href="https://x.com" className="hover:text-brand-500">X</a>
        </div>
      </div>
    </footer>
  );
}
