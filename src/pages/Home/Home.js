import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { FadeIn } from '../../components/common/FadeIn';
import { TechStack } from '../../components/common/TechStack';
import { colors } from '../../components/common/Colors';
import { Button } from '../../components/common/Button';
import { Stats } from '../../components/common/Stats';
import { CTASection } from '../../components/common/CTASection';
import { Services } from '../../components/common/Services';
import { Experience } from '../../components/common/Experience';
import { Certifications } from '../../components/common/Certifications';
import portrait from "../../assets/dp.jpg";
import batOne from "../../assets/bat-one.png";
import batFour from "../../assets/bat-four.png";
import resumePdf from "../../assets/OluwafemiResume.pdf";


export default function Home() {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [parallaxActive, setParallaxActive] = useState(false);
  const [parallaxProgress, setParallaxProgress] = useState(0);

  const handleScrollToCTA = () => {
    const target = document.getElementById("contact-cta");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleViewWork = () => {
    navigate("/portfolio");
  };

  const batLayers = useMemo(
    () => [
      {
        src: batFour,
        size: 180,
        top: "6%",
        left: "10%",
        driftX: 36,
        driftY: 58,
        rotate: -6,
        rotateDelta: 4,
        opacity: 0.36,
        mode: "parallax",
      },
      {
        src: batOne,
        size: 160,
        top: "18%",
        right: "16%",
        driftX: -42,
        driftY: 46,
        rotate: 9,
        rotateDelta: -5,
        opacity: 0.32,
        mode: "parallax",
      },
      {
        src: batFour,
        size: 140,
        top: "44%",
        left: "16%",
        driftX: 24,
        driftY: 28,
        rotate: 6,
        rotateDelta: 4,
        opacity: 0.3,
        mode: "slide",
        slideOrigin: "left",
        slideDistance: 150,
      },
      {
        src: batFour,
        size: 210,
        bottom: "24%",
        right: "16%",
        driftX: -30,
        driftY: -42,
        rotate: -8,
        rotateDelta: 6,
        opacity: 0.32,
        mode: "slide",
        slideOrigin: "right",
        slideDistance: 170,
      },
      {
        src: batFour,
        size: 170,
        top: "60%",
        right: "26%",
        driftX: 22,
        driftY: 30,
        rotate: 3,
        rotateDelta: -4,
        opacity: 0.28,
        mode: "slide",
        slideOrigin: "right",
        slideDistance: 160,
      },
    ],
    []
  );

  useEffect(() => {
    if (location.state && location.state.scrollTo === "services") {
      const timeout = setTimeout(() => {
        const section = document.getElementById("services-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);

      if (window.history.replaceState) {
        const { pathname, search } = location;
        window.history.replaceState({}, document.title, `${pathname}${search}`);
      }

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [location]);

  useEffect(() => {
    let animationFrame;

    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      const viewportHeight = window.innerHeight || 0;

      let nextParallaxActive = false;
      let nextParallaxProgress = 0;

      if (parallaxElement) {
        const rect = parallaxElement.getBoundingClientRect();
        nextParallaxActive = rect.top < viewportHeight && rect.bottom > 0;

        if (nextParallaxActive) {
          nextParallaxProgress = Math.min(
            1,
            Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height))
          );
        }
      }

      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setParallaxActive(nextParallaxActive);
        setParallaxProgress(nextParallaxActive ? nextParallaxProgress : 0);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-28">
      <main className="flex flex-col items-center justify-center px-5 pb-24 pt-8 sm:px-8">
        <section
          ref={heroRef}
          className="editorial-card relative grid w-full max-w-6xl overflow-hidden rounded-[2rem] lg:min-h-[660px] lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-16">
            <FadeIn delay={100}>
              <div className="eyebrow">Available for select projects</div>
            </FadeIn>

            <div className="py-16 lg:py-10">
              <FadeIn delay={250}>
                <p className="mb-5 font-heading text-lg font-medium text-[#697914] dark:text-[#dfff4f]">Frontend Engineer · Product Builder</p>
                <h1 className="max-w-3xl font-heading text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[#171a15] dark:text-[#f4f3eb]">
                  Frontend Engineer building complete <span className="italic text-[#718317] dark:text-[#dfff4f]">web & mobile products.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={450}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#62675c] sm:text-xl dark:text-[#aeb5a5]">
                  I build responsive interfaces, enterprise workflows, mobile experiences and backend-integrated products with React, Next.js, TypeScript and React Native—and help take them through deployment and production.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={650}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button variant="cta" onClick={handleViewWork}>View selected work <ArrowRight className="h-5 w-5" /></Button>
                <a href={resumePdf} download="Oluwafemi-Soaga-CV.pdf" className="flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold text-[#171a15] transition hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"><Download className="h-5 w-5" /> Download CV</a>
                <Button variant="ghost" className="border border-black/15 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10" onClick={handleScrollToCTA}><Mail className="h-5 w-5" /> Contact me</Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative min-h-[440px] overflow-hidden bg-[#cad864] lg:min-h-full">
            <img src={portrait} alt="Oluwafemi Soaga" className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171a15]/75 via-transparent to-transparent" />
            <div className="absolute right-5 top-5 rounded-full bg-[#dfff4f] px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-[#171a15]">Frontend first</div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 text-white sm:p-9">
              <div>
                <p className="font-heading text-2xl font-semibold text-white">Oluwafemi Soaga</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/75"><MapPin className="h-4 w-4" /> Lagos, Nigeria · Working globally</p>
              </div>
              <span className="h-3 w-3 animate-pulse rounded-full bg-[#dfff4f] shadow-[0_0_0_8px_rgba(223,255,79,0.18)]" />
            </div>
          </div>
        </section>

        <FadeIn delay={1200}>
          <div className="mt-8 w-full max-w-6xl">
            <Stats />
          </div>
        </FadeIn>

        <div ref={parallaxRef} className="relative mt-12 w-full">
          <div className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
            {batLayers.map((layer, index) => {
              const baseStyle = {
                top: layer.top,
                right: layer.right,
                bottom: layer.bottom,
                left: layer.left,
                width: layer.size,
              };

              const parallaxTransform = `translate3d(${(parallaxProgress - 0.5) * layer.driftX}px, ${
                (parallaxProgress - 0.5) * layer.driftY
              }px, 0) rotate(${layer.rotate + parallaxProgress * layer.rotateDelta}deg) scale(${1 +
                parallaxProgress * 0.1})`;

              const slideDistance = layer.slideDistance ?? 120;
              const slideDirection = layer.slideOrigin === "left" ? -1 : 1;
              const slideTransform = `translate3d(${slideDirection * (1 - parallaxProgress) * slideDistance}px, ${
                (1 - parallaxProgress) * 24
              }px, 0) scale(${1 + parallaxProgress * 0.04})`;

              const transform =
                layer.mode === "slide"
                  ? slideTransform
                  : parallaxTransform;

              const opacity = parallaxActive ? layer.opacity : 0;

              return (
                <img
                  key={index}
                  src={layer.src}
                  alt=""
                  className="absolute select-none drop-shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-transform duration-700 ease-out"
                  style={{
                    ...baseStyle,
                    transform,
                    opacity,
                  }}
                />
              );
            })}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <FadeIn delay={200}>
              <div id="services-section" className="w-full">
                <Services />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <Experience />
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-16 mb-16">
                <TechStack />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <Certifications />
            </FadeIn>


            <FadeIn delay={200}>
              <CTASection />
            </FadeIn>

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
        </div>

        {/* <iframe width="100" height="100" src="https://www.myinstants.com/instant/im-batman/embed/" frameborder="0" scrolling="no"></iframe> */}
      </main>
    </div>
  );
}
