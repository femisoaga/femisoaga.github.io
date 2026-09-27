import { Moon } from 'lucide-react';
import { RiSunFill } from 'react-icons/ri';
import { useTheme } from '../../hook/useTheme';

const ThemeToggle = ({ compact = false, className = '' }) => {
  const [theme, setTheme] = useTheme();
  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  const Icon = isDark ? Moon : RiSunFill;

  return (
    <button
      type="button"
      className={`theme-toggle relative flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200/70 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 ${compact ? 'w-11' : 'w-full px-3'} ${className}`}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden="true" className="pointer-events-none h-5 w-5" />
      {!compact && <span aria-hidden="true" className="text-sm font-semibold">{isDark ? 'Dark' : 'Light'} Mode</span>}
    </button>
  );
};

export default ThemeToggle;
