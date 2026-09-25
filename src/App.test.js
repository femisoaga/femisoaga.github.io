import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.pushState({}, '', '/');
});

test('renders the portfolio introduction', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /product engineer building digital experiences people care about/i })).toBeInTheDocument();
});

test('renders a case study at its direct route', () => {
  window.history.pushState({}, '', '/portfolio/business-central');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Business Central', level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/private while documenting reusable engineering patterns/i)).toBeInTheDocument();
});
