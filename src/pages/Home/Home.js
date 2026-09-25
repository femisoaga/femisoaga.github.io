import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FadeIn } from '../../components/common/FadeIn';
import { TechStack } from '../../components/common/TechStack';
import { colors } from '../../components/common/Colors';
import { CTASection } from '../../components/common/CTASection';
import { Services } from '../../components/common/Services';
import { Experience } from '../../components/common/Experience';
import { Certifications } from '../../components/common/Certifications';
import { ProductApproach } from '../../components/common/ProductApproach';
import { ProjectCard } from '../../components/portfolio/ProjectCard';
import { projects } from '../../data/projects';
import portrait from "../../assets/dp.jpeg";

export default function Home() {
  return (
    <main id="main-content" className="home-page container-pro">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Product Engineer building digital experiences <span>people care about.</span></h1>
          <p className="hero-description">I’m Oluwafemi Soaga. I combine frontend engineering, product thinking, and end-to-end ownership to build useful, reliable web and mobile products.</p>
          <div className="hero-actions">
            <Link className="hero-link hero-link-primary" to="/portfolio">View selected work <ArrowRight aria-hidden="true" size={18} /></Link>
            <Link className="hero-link" to="/contact">Let’s talk</Link>
          </div>
        </div>
        <img className="hero-portrait" src={portrait} srcSet={`${portrait} 810w`}
          sizes="(min-width: 1152px) 352px, (min-width: 720px) 31vw, (min-width: 360px) 280px, 240px"
          width={810} height={1080} alt="Oluwafemi Soaga, Product Engineer"
          loading="eager" fetchpriority="high" decoding="async" />
      </section>
      <div className="home-sections">
        <section aria-labelledby="selected-work-title">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-4">Selected work</p>
            <h2 id="selected-work-title" className="section-title">Product thinking, put into practice.</h2>
            <p className="mt-5">Banking operations, investment journeys, and research discovery. A closer look at the problems I help turn into working products.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.filter(project => ["business-central", "bucks-invest-partners", "sahara-centre"].includes(project.id)).map(project => <ProjectCard key={project.id} project={project} compact />)}
          </div>
        </section>
        <FadeIn><ProductApproach /></FadeIn>
        <FadeIn><div id="services-section" className="scroll-mt-28"><Services /></div></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><TechStack /></FadeIn>
        <FadeIn><Certifications /></FadeIn>
        <FadeIn><CTASection /></FadeIn>
            <FadeIn delay={400}>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex gap-4">
                  <a href="https://twitter.com/femi_soaga" target="_blank" rel="noopener noreferrer" aria-label="Oluwafemi Soaga on X" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Twitter aria-hidden="true" className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/femisoaga" target="_blank" rel="noopener noreferrer" aria-label="Oluwafemi Soaga on GitHub" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Github aria-hidden="true" className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/" target="_blank" rel="noopener noreferrer" aria-label="Oluwafemi Soaga on LinkedIn" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Linkedin aria-hidden="true" className="w-6 h-6" />
                  </a>
                  <a href="mailto:samuelsoaga@gmail.com" aria-label="Email Oluwafemi Soaga" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Mail aria-hidden="true" className="w-6 h-6" />
                  </a>
                </div>
                <p className={`${colors.text.secondary} text-sm`}>© {new Date().getFullYear()} Oluwafemi Soaga. Built with React &amp; Tailwind CSS</p>
              </div>
            </FadeIn>

      </div>
    </main>
  );
}
