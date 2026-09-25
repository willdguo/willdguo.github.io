import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import RandomWalkBackground from './components/RandomWalkBackground';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import PageNotFound from './components/PageNotFound';

const navItems = [
  ['Research', '/research'],
  ['Projects / Notes', '/projects'],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink className="wordmark" to="/">William Guo</NavLink>
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
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
