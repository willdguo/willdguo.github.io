import { Link } from 'react-router-dom';
import profile from '../images/willguo6.png';
import publications from '../data/publications';

export default function Home() {
  const paper = publications[0];
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">CS theory · UC San Diego</p>
          <h1>Hi, I’m William.<br />I study <em>algorithms.</em></h1>
          <p className="hero-lede">I’m a first-year computer science PhD student at UC San Diego, advised by <a href="https://barnasaha.net/" target="_blank" rel="noreferrer">Barna Saha</a>. I’m interested in randomized and approximation algorithms—and in making large computations more tractable.</p>
          <div className="button-row">
            <Link className="button primary" to="/research">Explore my research <span aria-hidden="true">→</span></Link>
            <a className="button quiet" href="mailto:wig001@ucsd.edu">Get in touch</a>
          </div>
          <div className="quick-links" aria-label="Profile links">
            <a href="https://scholar.google.com/citations?user=HwEGXIQAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <a href="https://github.com/willdguo" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span className="muted-link" title="A CV link has not yet been supplied">CV · link needed</span>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src={profile} alt="William Guo" /></div>
          <span className="orbit orbit-one" aria-hidden="true" /><span className="orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="home-grid page-shell" aria-label="Highlights">
        <article className="feature-card warm">
          <p className="card-label">Current question</p>
          <h2>How can randomness help us compute more efficiently?</h2>
          <p>I think about algorithms that trade a controlled amount of certainty or precision for dramatic gains in speed and scale.</p>
          <Link to="/research">Research overview <span aria-hidden="true">→</span></Link>
        </article>
        <article className="feature-card paper-feature">
          <p className="card-label">Publication · {paper.year}</p>
          <h2>{paper.title}</h2>
          <p>{paper.authors.join(', ')} · {paper.venue}</p>
          <Link to="/publications">Paper and resources <span aria-hidden="true">→</span></Link>
        </article>
        <article className="feature-card small-feature">
          <p className="card-label">A small experiment</p>
          <h2>Take a random walk.</h2>
          <p>Click or tap the open background to launch one. Each colored path evolves independently.</p>
        </article>
      </section>
    </>
  );
}
