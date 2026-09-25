import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/resume" },
];

const navClass = ({ isActive }) => `header-link${isActive ? " is-active" : ""}`;

export const Navigation = () => {
  const headerRef = useRef(null);
  const menuButton = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia?.("(min-width: 960px)");
    const onResize = () => { if (desktop?.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop?.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop?.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      ref={headerRef}
      className="site-header"
      data-scrolled={scrolled}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
    >
      <div className="header-glass">
        <div className="header-bar">
          <NavLink to="/" className="header-brand" aria-label="Femi Soaga, home" onClick={closeMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/logo1.svg`}
              alt="FEMISOAGA"
              width={255}
              height={40}
              className="h-auto w-32 sm:w-40 dark:invert"
            />
          </NavLink>

          <nav className="header-desktop-links" aria-label="Main navigation">
            {links.map(({ label, ...link }) => (
              <NavLink key={link.to} {...link} className={navClass}>{label}</NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle compact className="header-theme" />
            <NavLink to="/contact" className="header-contact header-desktop-contact">
              Let’s talk <ArrowUpRight aria-hidden="true" size={16} />
            </NavLink>
            <button
              ref={menuButton}
              aria-controls="mobile-navigation"
              type="button"
              onClick={() => setOpen(value => !value)}
              className="header-menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </div>

        <nav id="mobile-navigation" className="header-mobile-links" aria-label="Mobile navigation" hidden={!open}>
          {links.map(({ label, ...link }) => (
            <NavLink key={link.to} {...link} className={navClass} onClick={closeMenu}>{label}</NavLink>
          ))}
          <NavLink to="/contact" className="header-contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight aria-hidden="true" size={18} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
