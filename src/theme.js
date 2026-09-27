// A new key distinguishes explicit choices from the old auto-saved system theme.
export const THEME_STORAGE_KEY = 'theme-preference';
export const THEME_CHANGE_EVENT = 'portfolio-theme-change';
export const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

export const normalizeTheme = value => ['light', 'dark'].includes(value) ? value : 'system';

export const readThemePreference = () => {
  try {
    return normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return 'system';
  }
};

export const applyTheme = preference => {
  const dark = preference === 'dark' || (
    preference === 'system' && Boolean(window.matchMedia?.(SYSTEM_THEME_QUERY).matches)
  );
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
};

export const saveThemePreference = preference => {
  const next = normalizeTheme(preference);
  try {
    if (next === 'system') window.localStorage.removeItem(THEME_STORAGE_KEY);
    else window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // The selection still works for this page when browser storage is unavailable.
  }
  applyTheme(next);
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: next }));
};
