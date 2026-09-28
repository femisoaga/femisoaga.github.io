import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../../App";
import { projects } from "../../data/projects";

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.pushState({}, "", "/");
  document.head.innerHTML = '<title>Oluwafemi Soaga | Product Engineer</title><meta name="description" content="Portfolio"><meta property="og:title" content="Portfolio"><link rel="canonical" href="https://femisoaga.github.io/">';
});

test("flagship case study is reachable from home and returns to the project listing", () => {
  render(<App />);
  const card = screen.getAllByRole("article")[0];
  expect(within(card).getByRole("heading", { name: "AlertEvaluate" })).toBeInTheDocument();
  expect(screen.getAllByRole("article")[0]).toBe(card);
  expect(within(card).getByText(/complete frontend from scratch/i)).toBeInTheDocument();
  fireEvent.click(within(card).getByRole("link", { name: "View case study" }));
  expect(screen.getByRole("heading", { level: 1, name: "AlertEvaluate" })).toBeInTheDocument();
  expect(screen.getByText(/I did not build the backend APIs, database, or infrastructure/)).toBeInTheDocument();
  expect(within(screen.getByRole("navigation", { name: "Case study contents" })).getAllByRole("link")).toHaveLength(16);
  expect(document.title).toMatch(/AlertEvaluate/);
  // Metadata lives in document.head and has no accessible role.
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector('meta[property="og:title"]').content).toMatch(/AlertEvaluate/);
  fireEvent.click(screen.getByRole("link", { name: "Back to selected work" }));
  expect(document.title).toBe("Oluwafemi Soaga | Product Engineer");
  expect(screen.getAllByRole("article")[0]).toHaveTextContent("AlertEvaluate");
});

test("direct route contains verified stack and no public demo or source links", () => {
  window.history.pushState({}, "", "/portfolio/alert-evaluate");
  render(<App />);
  expect(screen.getByRole("heading", { name: "Complete frontend ownership" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /visit live|source code/i })).not.toBeInTheDocument();
  const project = projects.find(item => item.id === "alert-evaluate");
  expect(project.tags).toEqual(["Next.js", "React", "TypeScript", "Tailwind CSS", "React Context", "REST APIs"]);
  expect(new Set(projects.map(item => item.id)).size).toBe(projects.length);
  // Metadata lives in document.head and has no accessible role.
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.querySelector('link[rel="canonical"]').href).toBe("https://femisoaga.github.io/portfolio/alert-evaluate");
});
