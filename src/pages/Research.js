import { Link } from 'react-router-dom';

export default function Research() {
  return <div className="page-shell interior-page">
    <header className="page-heading"><p className="eyebrow">Research</p><h1>Algorithms under uncertainty.</h1><p>I study how randomness and approximation can make hard computational problems manageable.</p></header>
    <section className="research-intro two-column">
      <h2>A plain-language view</h2>
      <div className="prose"><p>Exact answers can be too expensive when data is enormous, arrives continuously, or is revealed one piece at a time. Randomized algorithms use chance deliberately; approximation algorithms aim for an answer that is provably close to the best one. I’m interested in when those ideas lead to faster, simpler, or more robust computation.</p><p>As a first-year PhD student, I’m exploring this area broadly rather than claiming a fixed research agenda.</p></div>
    </section>
    <section className="topic-grid">
      <article><span className="topic-number">01</span><h2>Randomized algorithms</h2><p>Using controlled randomness to design algorithms with strong guarantees and lower computational costs.</p></article>
      <article><span className="topic-number">02</span><h2>Approximation algorithms</h2><p>Finding efficiently computable solutions whose quality can be understood mathematically.</p></article>
      <article><span className="topic-number">03</span><h2>Massive-data computation</h2><p>Thinking about streaming and high-dimensional settings where traditional access to the data is unrealistic.</p></article>
      <article><span className="topic-number">04</span><h2>Stochastic processes</h2><p>Studying systems that evolve randomly, including earlier work on learning in networks and online learning.</p></article>
    </section>
    <aside className="callout"><div><p className="card-label">Want the technical version?</p><h2>See papers, slides, and project notes.</h2></div><div className="button-row"><Link className="button primary" to="/publications">Publications</Link><Link className="button quiet" to="/projects">Projects / Notes</Link></div></aside>
  </div>;
}
