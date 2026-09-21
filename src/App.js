import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import RandomWalkBackground from './components/RandomWalkBackground';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './components/PageNotFound';

const navItems = [
  ['About', '/about'],
  ['Research', '/research'],
  ['Publications', '/publications'],
  ['Teaching', '/teaching'],
  ['Projects / Notes', '/projects'],
  ['Contact', '/contact'],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink className="wordmark" to="/" aria-label="William Guo, home">
          WG<span className="wordmark-dot">.</span>
        </NavLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
          <span className="sr-only">Toggle navigation</span>
          <span /><span /><span />
        </button>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : undefined}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div><strong>William Guo</strong><br /><span>Algorithms · probability · theory</span></div>
      <div className="footer-links">
        <a href="mailto:wig001@ucsd.edu">Email</a>
        <a href="https://scholar.google.com/citations?user=HwEGXIQAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
        <a href="https://github.com/willdguo" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Header />
      <RandomWalkBackground />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
