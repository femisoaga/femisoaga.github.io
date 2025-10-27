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

  const glowClass = isDark
    ? "shadow-[0_0_0_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(148,163,184,0.35)]"
    : "shadow-[0_0_0_0_rgba(15,23,42,0.18)] hover:shadow-[0_0_18px_rgba(51,65,85,0.25)]";

  const baseButton = (
    <button
      type="button"
      aria-label="Toggle theme"
      className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${glowClass} ${className} ${
        isDark
          ? "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
          : "border-slate-200/70 bg-white/70 text-slate-700 hover:bg-slate-100/70"
      }`}
      onClick={() => setIsDark((v) => !v)}
    >
      <span className="pointer-events-none absolute inset-0 rounded-lg bg-white/30 opacity-0 transition-opacity duration-300 dark:bg-slate-200/20" />
      <span className="relative z-10">{icon}</span>
    </button>
  );

  if (compact) {
    return baseButton;
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
