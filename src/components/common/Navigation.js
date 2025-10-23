import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Code2, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { colors } from "./Colors";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative transition-all duration-300 group ${
        isActive
          ? `${colors.text.primary} font-semibold`
          : colors.text.secondary
      }`
    }
    end={to === "/"}
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10 flex items-center gap-1">
          {children}
        </span>
        <span
          className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          } origin-left`}
        />
        <span
          className={`absolute inset-0 -z-10 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-blue-500/10 scale-100"
              : "scale-75 bg-blue-500/0 group-hover:scale-100 group-hover:bg-blue-500/10"
          }`}
        />
      </>
    )}
  </NavLink>
);

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Services", to: "services" },
    { label: "Work", to: "/portfolio" },
    { label: "About", to: "/about" },
  ];

  const socialLinks = [
    {
      label: "Twitter",
      href: "https://twitter.com/femi_soaga",
      lightIcon: Twitter,
      darkIcon: Twitter,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oluwafemi-soaga-56875999/",
      lightIcon: Linkedin,
      darkIcon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/femisoaga",
      lightIcon: Github,
      darkIcon: Github,
    },
  ];

  const handleNavigate = () => setIsMenuOpen(false);

  const scrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleServicesNavigate = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "services" } });
    } else {
      scrollToServices();
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setServicesActive(false);
      return undefined;
    }

    const section = document.getElementById("services-section");
    if (!section) {
      setServicesActive(false);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesActive(entry.isIntersecting);
      },
      { root: null, threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [location.pathname]);

  const renderNavItem = ({ label, to }) => {
    if (to === "services") {
      return (
        <button
          key={label}
          type="button"
          onClick={handleServicesNavigate}
          className={`group relative overflow-hidden rounded-lg px-2 py-1 text-sm font-medium transition-all duration-300 ${
            servicesActive
              ? `${colors.text.primary} font-semibold`
              : colors.text.secondary
          }`}
        >
          <span className="relative z-10 flex items-center gap-1">{label}</span>
          <span
            className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
              servicesActive
                ? "bg-blue-500/15 opacity-100"
                : "bg-blue-500/10 opacity-0 group-hover:opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 origin-left ${
              servicesActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }`}
          />
        </button>
      );
    }

    return (
      <NavItem key={label} to={to} onClick={handleNavigate}>
        {label}
      </NavItem>
    );
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 sm:px-6">
      <nav className="relative rounded-2xl border border-blue-300/30 bg-gradient-to-br from-white/85 via-white/70 to-blue-50/40 px-4 py-4 sm:px-6 shadow-2xl shadow-slate-400/20 backdrop-blur-2xl transition-colors duration-500 dark:border-blue-500/20 dark:from-slate-950/90 dark:via-slate-900/80 dark:to-blue-950/70 dark:shadow-blue-900/30">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl opacity-70">
          <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
          <div className="absolute -bottom-40 right-0 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div
              className={`grid h-10 w-10 place-items-center rounded-xl border border-blue-300/40 bg-blue-200/40 ${colors.text.accent} transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 dark:border-blue-500/40 dark:bg-blue-500/10`}
            >
              <Code2 className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={`${colors.text.primary} text-lg font-semibold tracking-wide transition-colors duration-300 group-hover:text-blue-400`}
              >
                Femi
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-blue-400/70">
                Software Engineer
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => renderNavItem(link))}

            {socialLinks.map(({ label, href, lightIcon: LightIcon, darkIcon: DarkIcon }) => (
              <div key={label} className="relative group">
                <a
                  href={href}
                  aria-label={label}
                  className={`${colors.text.secondary} relative transition-transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-white group`}
                >
                  <LightIcon className="relative z-10 h-5 w-5 block dark:hidden" />
                  <DarkIcon className="relative z-10 hidden h-5 w-5 dark:block" />
                  <span className="absolute inset-0 rounded-full bg-blue-300/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-blue-500/20" />
                </a>
                <div className="pointer-events-none absolute left-1/2 top-full mt-3 w-max -translate-x-1/2 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.35)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-900/95 dark:text-slate-200" style={{ zIndex: 60 }}>
                  {label}
                </div>
              </div>
            ))}

            <div className="relative flex items-center group">
              <ThemeToggle compact className="border border-blue-300/40 bg-white/70 text-blue-700 hover:bg-blue-200/40 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-slate-200" />
              <div className="pointer-events-none absolute left-1/2 top-full mt-3 w-max -translate-x-1/2 rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-slate-600 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.45)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-800/95 dark:text-slate-200 dark:shadow-[0_10px_40px_-20px_rgba(148,163,184,0.45)] z-90">
                Toggle theme
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <NavLink
              to="/contact"
              className="group relative inline-flex items-center overflow-hidden rounded-xl border border-blue-300/30 bg-blue-200/40 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/30 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100 dark:hover:bg-blue-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Let's Talk
              </span>
              <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-200/40 text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 md:hidden dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100 dark:hover:bg-blue-500/20"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ${
            isMenuOpen
              ? "pointer-events-auto mt-6 opacity-100"
              : "pointer-events-none mt-0 opacity-0 h-[1rem]"
          }`}
        >
          <div className="space-y-6 rounded-2xl border border-blue-300/30 bg-white/85 p-6 shadow-lg shadow-slate-400/20 dark:border-blue-500/20 dark:bg-slate-950/85 dark:shadow-blue-900/30">
            <div className="space-y-4">
              {navLinks.map((link) =>
                link.to === "services" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={handleServicesNavigate}
                    className={`block w-full rounded-xl border px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                      servicesActive
                        ? "border-blue-400/60 bg-blue-300/30 text-blue-700 dark:border-blue-400/60 dark:bg-blue-500/20 dark:text-blue-100"
                        : "border-transparent bg-white/70 text-blue-600 hover:border-blue-400/40 hover:bg-blue-200/40 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    onClick={handleNavigate}
                    className={({ isActive }) =>
                      `block w-full rounded-xl border px-4 py-3 text-left text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "border-blue-400/60 bg-blue-300/30 text-blue-700 dark:border-blue-400/60 dark:bg-blue-500/20 dark:text-blue-100"
                          : "border-transparent bg-white/70 text-blue-600 hover:border-blue-400/40 hover:bg-blue-200/40 dark:bg-blue-500/5 dark:text-blue-100 dark:hover:bg-blue-500/15"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}

              <div className="flex justify-center">
                <ThemeToggle compact className="border border-blue-300/40 bg-white/70 text-blue-700 hover:bg-blue-200/40 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-slate-200" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map(({ label, href, lightIcon: LightIcon, darkIcon: DarkIcon }) => (
                  <div key={label} className="relative group">
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-200/40 text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100 dark:hover:bg-blue-500/20"
                    >
                      <LightIcon className="h-5 w-5 block dark:hidden" />
                      <DarkIcon className="hidden h-5 w-5 dark:block" />
                    </a>
                    <div className="pointer-events-none absolute left-1/2 top-full mt-3 w-max -translate-x-1/2 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.35)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-900/95 dark:text-slate-200" style={{ zIndex: 60 }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <NavLink
                to="/contact"
                className="block rounded-xl border border-blue-300/30 bg-blue-200/40 px-4 py-3 text-center text-base font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-300/40 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100 dark:hover:bg-blue-500/20"
                onClick={handleNavigate}
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Let's Talk
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
