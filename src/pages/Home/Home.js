import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Twitter } from "lucide-react";
import { FadeIn } from '../../components/common/FadeIn';
import { TypewriterText } from '../../components/common/TypewritterText';
import { TechStack } from '../../components/common/TechStack';
import { Badge } from '../../components/common/Badge';
import { colors } from '../../components/common/Colors';
import { Button } from '../../components/common/Button';
import { Stats } from '../../components/common/Stats';
import { CTASection } from '../../components/common/CTASection';
import { Services } from '../../components/common/Services';
import { Experience } from '../../components/common/Experience';
import { Certifications } from '../../components/common/Certifications';
import heroBackdrop from "../../assets/bg.png";
import batOne from "../../assets/bat-one.png";
import batTwo from "../../assets/bat-two.png";
import batThree from "../../assets/bat-three.png";
import batFour from "../../assets/bat-four.png";
import batFive from "../../assets/bat-five.png";
import batSix from "../../assets/bat-six.png";


export default function Home() {
  const typewriterTexts = [
    "Frontend Engineer",
    "DevOps Engineer",
    "Problem Solver"
    ];
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [heroTransform, setHeroTransform] = useState({ scale: 1, translateY: 0, opacity: 1 });
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
        driftY: 128,
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
      {
        src: batFour,
        size: 220,
        bottom: "10%",
        left: "30%",
        driftX: -24,
        driftY: 48,
        rotate: -4,
        rotateDelta: 5,
        opacity: 0.3,
        mode: "slide",
        slideOrigin: "left",
        slideDistance: 180,
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
      const heroElement = heroRef.current;
      const parallaxElement = parallaxRef.current;
      const viewportHeight = window.innerHeight || 0;

      let nextHeroTransform = null;
      if (heroElement) {
        const { top, height } = heroElement.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (viewportHeight - top) / (viewportHeight + height)));
        const scale = 1 + progress * 0.25;
        const translateY = progress * 60;
        const opacity = 0.35 + (1 - progress) * 0.25;

        nextHeroTransform = { scale, translateY, opacity };
      }

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
        if (nextHeroTransform) {
          setHeroTransform(nextHeroTransform);
        }
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
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
      `}</style>
      
      <main className="flex flex-col items-center justify-center px-6 pt-8 pb-32">
        <section ref={heroRef} className="relative flex w-full max-w-5xl flex-col items-center rounded-[2.5rem] border border-blue-500/20 bg-slate-950/40 px-6 py-20 text-center shadow-[0_40px_120px_-40px_rgba(56,189,248,0.45)] backdrop-blur-3xl sm:px-12 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-slate-900/60 to-slate-950/90" />
            <img
              src={heroBackdrop}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              style={{
                transform: `translate3d(0, ${heroTransform.translateY}px, 0) scale(${heroTransform.scale})`,
                opacity: heroTransform.opacity,
                transition: "transform 80ms linear, opacity 120ms ease-out",
                willChange: "transform, opacity",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(129,140,248,0.35),transparent_55%)] mix-blend-screen" />
          </div>

          <FadeIn delay={200}>
            <div className="mb-8 flex justify-center">
              <Badge icon={Sparkles}>Available for Freelance & Contract Work</Badge>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <h1 className={`${colors.text.primary} text-5xl font-bold leading-tight md:text-7xl`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Oluwafemi Soaga
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <div className={`${colors.text.primary} mb-6 flex min-h-[60px] items-center justify-center text-3xl font-semibold md:text-4xl`}>
              <TypewriterText texts={typewriterTexts} />
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <p className={`${colors.text.secondary} mb-12 max-w-2xl text-lg md:text-xl`}>
              I turn complex problems into elegant solutions.
I specialize in building high-performance, user-centric web applications — from responsive frontends to scalable backend and cloud infrastructure that drive business growth.
            </p>
          </FadeIn>

          <FadeIn delay={1000}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="cta" onClick={handleScrollToCTA}>
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="ghost" className="hover:bg-blue-500/10" onClick={handleViewWork}>
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
        </section>

        <FadeIn delay={1200}>
          <div className="mt-20 w-full max-w-5xl">
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
                  <a href="https://twitter.com/femi_soaga" target="_blank" rel="noopener noreferrer" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/femisoaga" target="_blank" rel="noopener noreferrer" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/oluwafemi-soaga-56875999/" target="_blank" rel="noopener noreferrer" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:samuelsoaga@gmail.com" className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
                <p className={`${colors.text.secondary} text-sm`}>© 2025 Oluwafemi Soaga. Built with React & Tailwind CSS</p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* <iframe width="100" height="100" src="https://www.myinstants.com/instant/im-batman/embed/" frameborder="0" scrolling="no"></iframe> */}
      </main>
    </div>
  );
}
