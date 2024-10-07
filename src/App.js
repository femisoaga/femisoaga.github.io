import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import ContactMe from "./ContactMe";
import Pitch from "./Pitch";
import Portfolio from "./Portfolio";
import Layout from './Layout';
import About from './About';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<About />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/pitch" exact element={<Pitch />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
