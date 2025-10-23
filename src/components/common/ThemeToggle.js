import React from 'react';

const ThemeToggle = ({ compact = false, className = '' }) => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const icon = isDark ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 1 0 21.64 13z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    </svg>
  );

  if (compact) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm ${className}`}
        onClick={() => setIsDark(v => !v)}
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={`btn btn-ghost w-full mt-2 justify-between px-3 py-2 border border-slate-200/70 dark:border-white/10 rounded-lg ${className}`}
      onClick={() => setIsDark(v => !v)}
    >
      <span className="text-xs font-semibold">{isDark ? 'Dark' : 'Light'} Mode</span>
      <span className="ml-2">{icon}</span>
    </button>
  );
};

export default ThemeToggle;
