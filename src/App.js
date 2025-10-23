import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/common/Navigation";
import { colors } from "./components/common/Colors";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/Contact/ContactMe";
import Home from "./pages/Home/Home";
import Pitch from "./pages/Pitch/Pitch";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className={`relative min-h-screen ${colors.bg.primary} text-slate-100`}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute top-1/2 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <Navigation />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/pitch" element={<Pitch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
