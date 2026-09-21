import { Link } from 'react-router-dom';
import profile from '../images/willguo6.png';
import publications from '../data/publications';

export default function Home() {
  const paper = publications[0];

  return (
    <div className="page-shell home-page">
      <section className="home-introduction">
        <div className="home-copy">
          <h1>William Guo</h1>
          <p className="home-role">Computer Science PhD student at UC San Diego</p>
          <p>
            I am a first-year PhD student advised by{' '}
            <a href="https://barnasaha.net/" target="_blank" rel="noreferrer">Barna Saha</a>.
            I am broadly interested in theoretical computer science, especially randomized and
            approximation algorithms. I am also interested in streaming algorithms,
            high-dimensional problems, and stochastic processes.
          </p>
          <p>
            Before UC San Diego, I completed a dual degree in computer science and statistics at
            the University of Pennsylvania. At Penn, I worked with{' '}
            <a href="https://sites.google.com/site/erikwaing/home?authuser=0" target="_blank" rel="noreferrer">Erik Waingarten</a>{' '}
            on algorithms for massive data. I also studied learning in random-order networks with{' '}
            <a href="https://sites.rutgers.edu/jie-gao/about/" target="_blank" rel="noreferrer">Jie Gao</a>{' '}
            through the DIMACS REU. In summer 2026, I worked at the Max Planck Institute for
            Informatics with <a href="https://sites.google.com/view/guyeven/" target="_blank" rel="noreferrer">Guy Even</a> and{' '}
            <a href="https://danidorfman.com/" target="_blank" rel="noreferrer">Dani Dorfman</a>.
          </p>
          <p>
            Outside research, I enjoy pickup soccer and volleyball, playing piano, and bouldering.
            Before focusing on theory, I also spent time in the early-stage startup ecosystem,
            including work at a predictive grid-management startup and in venture capital at SIG.
          </p>
          <div className="profile-links" aria-label="Profile and contact links">
            <a href="mailto:wig001@ucsd.edu">Email</a>
            <a href="https://scholar.google.com/citations?user=HwEGXIQAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://github.com/willdguo" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/willdguo/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="placeholder-link" title="A current CV has not been supplied">CV [link needed]</span>
          </div>
        </div>
        <figure className="home-photo">
          <div className="photo-matte"><img src={profile} alt="William Guo" /></div>
          <figcaption>William Guo</figcaption>
        </figure>
      </section>

      <section className="home-section" aria-labelledby="research-heading">
        <div className="section-heading">
          <h2 id="research-heading">Research</h2>
          <Link to="/research">Research and publications →</Link>
        </div>
        <ul className="interest-list">
          <li><strong>Randomized and approximation algorithms</strong><span>Provably efficient methods that use randomness or controlled approximation.</span></li>
          <li><strong>Algorithms for large data</strong><span>Streaming and high-dimensional problems with limited time, memory, or access to the input.</span></li>
          <li><strong>Stochastic processes</strong><span>Earlier work in online learning and sequential learning in networks.</span></li>
        </ul>
      </section>

      <section className="home-section" aria-labelledby="publication-heading">
        <div className="section-heading">
          <h2 id="publication-heading">Publication</h2>
          <Link to="/research">Details →</Link>
        </div>
        <article className="home-publication">
          <span className="publication-year">{paper.year}</span>
          <div><h3>{paper.title}</h3><p>{paper.authors.join(', ')}</p><p><em>{paper.venue} {paper.year}</em></p>
            <div className="inline-links"><a href={paper.arxiv} target="_blank" rel="noreferrer">arXiv</a><a href={paper.pdf} target="_blank" rel="noreferrer">PDF</a><a href={paper.slides} target="_blank" rel="noreferrer">Slides</a></div>
          </div>
        </article>
      </section>

      <section className="home-section compact-section" aria-labelledby="recent-heading">
        <div className="section-heading"><h2 id="recent-heading">Recent</h2></div>
        <ul className="news-list">
          <li><time>May 2026</time><span>Presented “Robust Sequential Learning in Random Order Networks” in person at AAMAS in Cyprus.</span></li>
          <li><time>May 2026</time><span>Traveled to Saarbrücken for a research internship at the Max Planck Institute for Informatics.</span></li>
        </ul>
      </section>
    </div>
  );
}
