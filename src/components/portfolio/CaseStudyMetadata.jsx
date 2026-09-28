import { useEffect } from "react";
import metadata from "../../data/alertEvaluateSeo.json";

export const CaseStudyMetadata = () => {
  useEffect(() => {
    const previousTitle = "Oluwafemi Soaga | Product Engineer";
    document.title = metadata.title;
    const updates = [
      ['meta[name="description"]', 'content', metadata.description],
      ['meta[property="og:title"]', 'content', metadata.title],
      ['meta[property="og:description"]', 'content', metadata.description],
      ['meta[property="og:url"]', 'content', metadata.url],
      ['meta[name="twitter:title"]', 'content', metadata.title],
      ['meta[name="twitter:description"]', 'content', metadata.description],
      ['link[rel="canonical"]', 'href', metadata.url],
    ];
    const defaults = [
      "Product Engineer building reliable web and mobile products with frontend expertise, end-to-end ownership, and practical AI integration.",
      previousTitle,
      "Product Engineer combining frontend depth and product thinking to build reliable systems that help people and businesses work better.",
      "https://femisoaga.github.io/",
      previousTitle,
      "Product Engineer building digital experiences people care about, with frontend expertise and end-to-end engineering ownership.",
      "https://femisoaga.github.io/",
    ];
    const restore = updates.map(([selector, attribute, value], index) => {
      const element = document.querySelector(selector);
      const previous = defaults[index];
      element?.setAttribute(attribute, value);
      return () => {
        if (previous == null) element?.removeAttribute(attribute);
        else element?.setAttribute(attribute, previous);
      };
    });
    return () => {
      document.title = previousTitle;
      restore.forEach(reset => reset());
    };
  }, []);
  return null;
};
