import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Navigation } from "./components/common/Navigation";
import { colors } from "./components/common/Colors";
import About from "./pages/About/About";
import ContactMe from "./pages/Contact/ContactMe";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";
import Resume from "./pages/Resume/Resume";

function RouteScroll() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo !== "services") window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RouteScroll />
      <div className={`site-shell relative min-h-screen ${colors.bg.primary} text-slate-900 dark:text-slate-100`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
