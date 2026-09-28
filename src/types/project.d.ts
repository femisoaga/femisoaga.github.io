export interface CaseStudySection {
  id: string;
  title: string;
  paragraphs: string[];
  steps?: { title: string; copy: string }[];
  image?: { src: string; alt: string; caption: string };
}
export interface Project {
  id: string;
  slug?: string;
  title: string;
  category: string;
  categoryIds: string[];
  status: string;
  description: string;
  summary?: string;
  role?: string;
  ownership?: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
  accent?: string;
  problem?: string;
  features?: string[];
  decisions?: string[];
  improvements?: string[];
  implementation?: { title: string; copy: string }[];
  confidentialityNote?: string;
  liveUrl?: string;
  actionLabel?: string;
  date?: string;
  caseStudy?: CaseStudySection[];
}
