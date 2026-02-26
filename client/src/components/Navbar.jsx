import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const links = [
  ['/', 'Home'],
  ['/types', 'Cube Types'],
  ['/shop', 'Shop'],
  ['/made', 'How It’s Made'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="text-xl font-bold text-brand-500">Rubikon</Link>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {links.map(([path, label]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `hover:text-brand-500 ${isActive ? 'text-brand-500' : ''}`}>
              {label}
            </NavLink>
          ))}
          {user ? (
            <>
              <NavLink to="/dashboard" className="hover:text-brand-500">Dashboard</NavLink>
              <button onClick={logout} className="rounded-lg border px-3 py-1 hover:border-brand-500">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/signin" className="hover:text-brand-500">Sign In</NavLink>
              <NavLink to="/signup" className="rounded-lg bg-brand-500 px-3 py-1 text-white hover:bg-brand-600">Sign Up</NavLink>
            </>
          )}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-lg border px-3 py-1 hover:border-brand-500"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </nav>
    </header>
  );
}
