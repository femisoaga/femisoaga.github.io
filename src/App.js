import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/common/Navigation";
import { colors } from "./components/common/Colors";
import About from "./pages/About/About";
import ContactMe from "./pages/Contact/ContactMe";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className={`site-shell relative min-h-screen ${colors.bg.primary} text-slate-900 dark:text-slate-100`}>
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-32 top-24 h-[28rem] w-[28rem] rounded-full bg-[#dfff4f]/20 blur-[110px] dark:bg-[#dfff4f]/10" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#ff714b]/10 blur-[100px] dark:bg-[#ff714b]/5" />
          <div className="grid-noise absolute inset-0 opacity-50 dark:opacity-25" />
        </div>

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
