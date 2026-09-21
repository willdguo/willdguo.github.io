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
          <p className="home-role">PhD student in Computer Science, UC San Diego</p>
          <p>
            I am a first-year PhD student advised by{' '}
            <a href="https://barnasaha.net/" target="_blank" rel="noreferrer">Barna Saha</a>.
            I am broadly interested in theoretical computer science, particularly randomized and
            approximation algorithms. My earlier work involved stochastic processes, streaming,
            and learning in networks.
          </p>
          <p>
            Before UC San Diego, I completed a dual degree at the University of Pennsylvania.
          </p>
          <div className="profile-links" aria-label="Profile and contact links">
            <a href="mailto:wig001@ucsd.edu">Email</a>
            <a href="https://scholar.google.com/citations?user=HwEGXIQAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="https://github.com/willdguo" target="_blank" rel="noreferrer">GitHub</a>
            <span className="placeholder-link" title="A current CV has not been supplied">CV [link needed]</span>
          </div>
        </div>
        <img className="home-portrait" src={profile} alt="William Guo" />
      </section>

      <section className="home-section" aria-labelledby="research-heading">
        <div className="section-heading">
          <h2 id="research-heading">Research interests</h2>
          <Link to="/research">Overview →</Link>
        </div>
        <div className="interest-list">
          <div><h3>Randomized algorithms</h3><p>Algorithms that use randomness to improve efficiency or robustness while retaining provable guarantees.</p></div>
          <div><h3>Approximation algorithms</h3><p>Efficient methods for hard optimization problems when computing an exact solution is impractical.</p></div>
          <div><h3>Algorithms for large data</h3><p>Streaming and high-dimensional settings with limited time, memory, or access to the input.</p></div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="publication-heading">
        <div className="section-heading">
          <h2 id="publication-heading">Selected publication</h2>
          <Link to="/publications">All publications →</Link>
        </div>
        <article className="home-publication">
          <span className="publication-year">{paper.year}</span>
          <div>
            <h3>{paper.title}</h3>
            <p>{paper.authors.join(', ')}</p>
            <p><em>{paper.venue} {paper.year}</em></p>
            <div className="inline-links"><a href={paper.arxiv} target="_blank" rel="noreferrer">arXiv</a><a href={paper.pdf} target="_blank" rel="noreferrer">PDF</a><a href={paper.slides} target="_blank" rel="noreferrer">Slides</a></div>
          </div>
        </article>
      </section>

      <section className="home-section compact-section" aria-labelledby="recent-heading">
        <div className="section-heading"><h2 id="recent-heading">Recent</h2></div>
        <ul className="news-list">
          <li><time>2026</time><span>“Robust Sequential Learning in Random Order Networks” accepted to AAMAS 2026.</span></li>
          <li><time>2026</time><span>Beginning the Computer Science PhD program at UC San Diego.</span></li>
        </ul>
      </section>
    </div>
  );
}
