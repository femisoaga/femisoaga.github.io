import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Menu, Twitter, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Résumé", to: "/resume" },
];

const socials = [
  { label: "X", href: "https://twitter.com/femi_soaga", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwafemi-soaga-56875999/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/femisoaga", Icon: Github },
];

const navClass = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-[#171a15] text-white dark:bg-[#dfff4f] dark:text-[#171a15]"
      : "text-[#5d6257] hover:bg-black/5 hover:text-[#171a15] dark:text-[#adb4a5] dark:hover:bg-white/10 dark:hover:text-white"
  }`;

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const goToServices = () => {
    if (location.pathname !== "/") navigate("/", { state: { scrollTo: "services" } });
    else document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-[#f8f7f0]/90 p-2 pl-4 shadow-[0_12px_45px_-24px_rgba(23,26,21,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-[#151812]/90">
        <NavLink to="/" className="group flex items-center gap-3" aria-label="Femi Soaga, home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dfff4f] font-heading text-sm font-bold text-[#171a15] transition-transform group-hover:rotate-6">FS</span>
          <span className="hidden font-heading text-sm font-semibold text-[#171a15] sm:block dark:text-white">Oluwafemi Soaga</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          <button onClick={goToServices} className="rounded-full px-4 py-2 text-sm font-semibold text-[#5d6257] transition-colors hover:bg-black/5 hover:text-[#171a15] dark:text-[#adb4a5] dark:hover:bg-white/10 dark:hover:text-white">Services</button>
          {links.map((link) => <NavLink key={link.to} {...link} className={navClass}>{link.label}</NavLink>)}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle compact className="border-0 bg-black/5 text-[#171a15] hover:bg-black/10 dark:bg-white/10 dark:text-white" />
          <NavLink to="/contact" className="hidden items-center gap-2 rounded-full bg-[#dfff4f] px-4 py-2 text-sm font-bold text-[#171a15] transition-transform hover:-translate-y-0.5 sm:flex">Start a project <ArrowUpRight className="h-4 w-4" /></NavLink>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full bg-[#171a15] text-white md:hidden dark:bg-[#dfff4f] dark:text-[#171a15]" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f8f7f0] p-5 shadow-2xl md:hidden dark:border-white/10 dark:bg-[#171a15]">
          <div className="flex flex-col gap-2">
            <button onClick={goToServices} className="rounded-2xl px-5 py-4 text-left font-heading text-2xl font-semibold text-[#171a15] hover:bg-black/5 dark:text-white dark:hover:bg-white/10">Services</button>
            {links.map((link) => <NavLink key={link.to} {...link} className="rounded-2xl px-5 py-4 font-heading text-2xl font-semibold text-[#171a15] hover:bg-black/5 dark:text-white dark:hover:bg-white/10">{link.label}</NavLink>)}
            <NavLink to="/contact" className="mt-2 flex items-center justify-between rounded-2xl bg-[#dfff4f] px-5 py-4 font-heading text-xl font-semibold text-[#171a15]">Start a project <ArrowUpRight /></NavLink>
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-black/10 pt-5 dark:border-white/10">
            {socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-[#62675c] dark:border-white/10 dark:text-[#aeb5a5]"><Icon className="h-5 w-5" /></a>)}
          </div>
        </div>
      )}
    </header>
  );
};
