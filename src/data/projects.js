// src/data/projects.js

import sarepayImage from "../assets/sarepay.png";
import uniswitchImage from "../assets/uniswitch.png";
import kekereImage from "../assets/kekere.png";
import billerhqImage from "../assets/billerhq.png";
import cloudPractitionerBadge from "../assets/cloudpractioner badge.png";
import solutionsArchitectBadge from "../assets/solutions architect badge.png";
import alxLogo from "../assets/Alx-logo-black.svg";
import celoxImage from "../assets/celox.png";
import estazImage from "../assets/estaz.png";
import stainbockImage from "../assets/stainbock.png";
import nolabelImage from "../assets/nolabel.png";
import bbwmlImage from "../assets/bbwml.png";
import seekoolImage from "../assets/seekool.png";
import hrdeskImage from "../assets/hrdesk.png";

// ---------------------------------------------
// Categories
// ---------------------------------------------
export const categories = [
  { id: "web-apps", label: "Web Apps" },
  { id: "wordpress", label: "WordPress Sites" },
  { id: "devops-cert", label: "Certifications" },
  { id: "product-experiments", label: "Product Experiments" },
];

// ---------------------------------------------
// Utilities
// ---------------------------------------------
export const sortProjectsByDateDesc = (arr) =>
  [...arr].sort((a, b) => {
    const ad = a?.date ? new Date(a.date).getTime() : -Infinity;
    const bd = b?.date ? new Date(b.date).getTime() : -Infinity;
    return bd - ad;
  });

export const byCategory = (arr, categoryId) =>
  arr.filter((p) => p.categoryIds?.includes(categoryId));

export const featuredFirst = (arr) =>
  [...arr].sort((a, b) => Number(b.featured) - Number(a.featured));

// ---------------------------------------------
// Projects
// ---------------------------------------------
export const projects = [
  // ---------- WEB APPS ----------
  {
    id: "bbwml",
    title: "BBWML — Wealth Management Platform",
    description:
      "A corporate wealth management platform offering advisory and investment solutions, built with Next.js, Tailwind CSS, and TypeScript.",
    image: bbwmlImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    href: "https://bbwml.com/",
    date: null,
  },
  {
    id: "seekoool",
    title: "Seekoool — Eyewear E-Commerce",
    description:
      "An online eyewear store providing high-quality glasses and personalized shopping experiences, developed with Next.js, Tailwind CSS, and TypeScript.",
    image: seekoolImage,
    tags: ["Next.js", "E-commerce", "TypeScript"],
    categoryIds: ["web-apps"],
    href: "https://seekoool-test.vercel.app/",
    date: null,
  },
  {
    id: "sarepay",
    title: "Sarepay — Payment Platform",
    description:
      "A fintech web app for seamless business payments and settlements, built with Next.js, Tailwind CSS, and TypeScript.",
    image: sarepayImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    featured: true,
    href: "https://sarepay.com",
    date: "2024-03-15",
  },
  {
    id: "kekere",
    title: "Kekere — Real Estate Investment",
    description:
      "A property investment platform enabling users to invest in rental and off-plan real estate, developed with Next.js, Tailwind CSS, and TypeScript.",
    image: kekereImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    featured: true,
    href: "https://kekere.com",
    date: "2023-09-18",
  },
  {
    id: "billerhq",
    title: "BillerHQ — Bill Management Platform",
    description:
      "A billing automation dashboard for enterprises, featuring role-based access and real-time analytics, built with React and Tailwind CSS.",
    image: billerhqImage,
    tags: ["React", "Tailwind"],
    categoryIds: ["web-apps"],
    href: "https://billerhq.com",
    date: "2023-05-09",
  },
  {
    id: "celox-assist",
    title: "Celox Assist — Loan Management System",
    description:
      "An internal loan management system for handling onboarding, compliance, and disbursement, built with Next.js, Tailwind CSS, and TypeScript.",
    image: celoxImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    href: "https://assist.celoxtech.com/",
    date: null,
  },
  {
    id: "hrdesk-staging",
    title: "HRDesk — Workforce Management Portal",
    description:
      "An HR platform for managing employees, roles, and workflows, developed with Next.js, Tailwind CSS, and TypeScript.",
    image: hrdeskImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    href: "https://staging-dashboard.hrdesk.africa/",
    date: null,
  },
  {
    id: "uniswitch",
    title: "Uniswitch — Fintech Company Website",
    description:
      "A responsive marketing and information site for Uniswitch, showcasing fintech services and integrations, built with Next.js, Tailwind CSS, and TypeScript.",
    image: uniswitchImage,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    categoryIds: ["web-apps"],
    featured: true,
    href: "https://www.uniswitchng.com",
    date: "2023-12-01",
  },

  // ---------- WORDPRESS ----------
  {
    id: "stainbock",
    title: "Stainbock — IT Services Website",
    description:
      "A WordPress-based site for an IT company offering managed services, cloud solutions, and infrastructure support.",
    image: stainbockImage,
    tags: ["WordPress", "Elementor"],
    categoryIds: ["wordpress"],
    href: "https://stainbock.co.uk/",
    date: null,
  },
  {
    id: "nolabelent",
    title: "No Label Entertainment — Creative Brand",
    description:
      "A multimedia WordPress platform for an entertainment brand combining music, fashion, and culture.",
    image: nolabelImage,
    tags: ["WordPress", "E-commerce", "Media"],
    categoryIds: ["wordpress"],
    href: "https://nolabelent.com/",
    date: null,
  },
  {
    id: "estaz",
    title: "Estaz Clothing — Fashion E-Commerce",
    description:
      "A WordPress e-commerce platform for a sustainable fashion brand focused on culture, innovation, and design.",
    image: estazImage,
    tags: ["WordPress", "E-commerce", "Fashion"],
    categoryIds: ["wordpress"],
    href: "https://estazclothing.com/",
    date: null,
  },

  // ---------- CERTIFICATIONS ----------
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    description:
      "Certification validating AWS cloud fundamentals, security, and cost-optimization principles.",
    image: cloudPractitionerBadge,
    tags: ["AWS", "Certification"],
    categoryIds: ["devops-cert"],
    href: "https://www.credly.com/badges/0148e939-c4d0-4aa2-8451-c1c0d027ae35",
    date: "2023-11-12",
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect – Associate",
    description:
      "Certification demonstrating expertise in designing resilient, scalable, and cost-efficient AWS architectures.",
    image: solutionsArchitectBadge,
    tags: ["AWS", "Architecture"],
    categoryIds: ["devops-cert"],
    href: "https://www.credly.com/badges/7a37ac9b-3286-4a18-9928-efd86f1b19d8",
    date: "2023-09-07",
  },
  {
    id: "alx-aws",
    title: "ALX — AWS Cloud Computing Specialization",
    description:
      "A hands-on program covering key AWS services, automation, and operational excellence.",
    image: alxLogo,
    tags: ["Cloud", "Specialization"],
    categoryIds: ["devops-cert", "product-experiments"],
    href: "https://www.alxafrica.com/",
    date: "2023-06-20",
  },
  {
    id: "alx-foundation",
    title: "ALX Foundation Program",
    description:
      "An intensive foundation program focused on product thinking, agile teamwork, and delivery practices.",
    image: alxLogo,
    tags: ["Collaboration", "Product"],
    categoryIds: ["product-experiments"],
    date: "2022-12-10",
  },
];

// ---------------------------------------------
// Helpers
// ---------------------------------------------
export const projectsByCategory = {
  webApps: sortProjectsByDateDesc(byCategory(projects, "web-apps")),
  wordpress: sortProjectsByDateDesc(byCategory(projects, "wordpress")),
  certs: sortProjectsByDateDesc(byCategory(projects, "devops-cert")),
  experiments: sortProjectsByDateDesc(
    byCategory(projects, "product-experiments")
  ),
};

export const featuredProjects = featuredFirst(projects).slice(0, 6);
