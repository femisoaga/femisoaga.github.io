import { act, fireEvent, render, screen } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { applyTheme, readThemePreference, THEME_STORAGE_KEY } from '../../theme';

let media;
let listeners;
const originalMatchMedia = window.matchMedia;

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  document.documentElement.style.colorScheme = '';
  listeners = new Set();
  media = {
    matches: false,
    addEventListener: jest.fn((type, listener) => listeners.add(listener)),
    removeEventListener: jest.fn((type, listener) => listeners.delete(listener)),
  };
  window.matchMedia = jest.fn(() => media);
});

afterEach(() => {
  jest.restoreAllMocks();
  window.matchMedia = originalMatchMedia;
});

const changeSystem = dark => act(() => {
  media.matches = dark;
  listeners.forEach(listener => listener({ matches: dark }));
});

const choose = value => fireEvent.click(screen.getByRole('button', { name: `Switch to ${value} mode` }));

test('defaults to the system, reacts to changes, and never saves an automatic choice', () => {
  media.matches = true;
  render(<ThemeToggle compact />);
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  expect(document.documentElement).toHaveClass('dark');
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
  changeSystem(false);
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
  expect(document.documentElement).not.toHaveClass('dark');
  expect(document.documentElement.style.colorScheme).toBe('light');
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
});

test('explicit light and dark choices override the system and survive a remount', () => {
  media.matches = true;
  const view = render(<ThemeToggle />);
  choose('light');
  expect(document.documentElement).not.toHaveClass('dark');
  changeSystem(false);
  changeSystem(true);
  expect(document.documentElement).not.toHaveClass('dark');
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  choose('dark');
  changeSystem(false);
  expect(document.documentElement).toHaveClass('dark');
  view.unmount();
  render(<ThemeToggle />);
  expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
  expect(document.documentElement).toHaveClass('dark');
});

test('the toggle only alternates between light and dark, starting from the current system appearance', () => {
  media.matches = true;
  render(<ThemeToggle compact />);
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  choose('light');
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  choose('dark');
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  choose('light');
  expect(document.documentElement).not.toHaveClass('dark');
});

test('syncs a choice or cleared preference from another tab', () => {
  render(<ThemeToggle />);
  act(() => window.dispatchEvent(new StorageEvent('storage', { key: THEME_STORAGE_KEY, newValue: 'dark' })));
  expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
  expect(document.documentElement).toHaveClass('dark');
  act(() => window.dispatchEvent(new StorageEvent('storage', { key: null, newValue: null })));
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  expect(document.documentElement).not.toHaveClass('dark');
});

test('keeps multiple theme controls synchronized', () => {
  render(<><ThemeToggle /><ThemeToggle compact /></>);
  fireEvent.click(screen.getAllByRole('button', { name: 'Switch to dark mode' })[0]);
  expect(screen.getAllByRole('button', { name: 'Switch to light mode' })).toHaveLength(2);
});

test('ignores old auto-saved themes and invalid preferences during startup', () => {
  localStorage.setItem('theme', 'dark');
  localStorage.setItem(THEME_STORAGE_KEY, 'invalid');
  applyTheme(readThemePreference());
  expect(document.documentElement).not.toHaveClass('dark');
  render(<ThemeToggle />);
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
});

test('works when browser storage is blocked', () => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('Storage blocked'); });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Storage blocked'); });
  jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => { throw new Error('Storage blocked'); });
  media.matches = true;
  applyTheme(readThemePreference());
  expect(document.documentElement).toHaveClass('dark');
  render(<ThemeToggle />);
  choose('light');
  expect(document.documentElement).not.toHaveClass('dark');
  choose('dark');
  expect(document.documentElement).toHaveClass('dark');
});

test('cleans up system listeners on unmount', () => {
  const view = render(<ThemeToggle />);
  expect(listeners.size).toBe(1);
  view.unmount();
  expect(listeners.size).toBe(0);
});
