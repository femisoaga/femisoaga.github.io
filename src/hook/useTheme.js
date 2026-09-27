import { useEffect, useState } from 'react';
import {
  applyTheme, normalizeTheme, readThemePreference, saveThemePreference,
  SYSTEM_THEME_QUERY, THEME_CHANGE_EVENT, THEME_STORAGE_KEY,
} from '../theme';

export const useTheme = () => {
  const [preference, setPreference] = useState(readThemePreference);
  const [systemDark, setSystemDark] = useState(() => Boolean(window.matchMedia?.(SYSTEM_THEME_QUERY).matches));

  useEffect(() => {
    const media = window.matchMedia?.(SYSTEM_THEME_QUERY);
    const onSystemChange = () => {
      setSystemDark(Boolean(media?.matches));
      if (preference === 'system') applyTheme('system');
    };
    const onPreferenceChange = event => setPreference(normalizeTheme(event.detail));
    const onStorage = event => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setPreference(normalizeTheme(event.newValue));
      }
    };

    if (media?.addEventListener) media.addEventListener('change', onSystemChange);
    else media?.addListener?.(onSystemChange);
    window.addEventListener(THEME_CHANGE_EVENT, onPreferenceChange);
    window.addEventListener('storage', onStorage);
    setSystemDark(Boolean(media?.matches));
    applyTheme(preference);

    return () => {
      if (media?.removeEventListener) media.removeEventListener('change', onSystemChange);
      else media?.removeListener?.(onSystemChange);
      window.removeEventListener(THEME_CHANGE_EVENT, onPreferenceChange);
      window.removeEventListener('storage', onStorage);
    };
  }, [preference]);

  const theme = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;
  return [theme, saveThemePreference];
};
