import { useState } from 'react';
import publications from '../data/publications';

function Publication({ publication }) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const resources = [
    ['PDF', publication.pdf], ['arXiv', publication.arxiv], ['Slides', publication.slides],
    ['Code', publication.code], ['BibTeX', publication.bibtex],
  ].filter(([, link]) => link);

  return (
    <article className="publication">
      <div className="publication-year">{publication.year}</div>
      <div>
        <p className="venue">{publication.venue}</p>
        <h2>{publication.title}</h2>
        <p className="authors">{publication.authors.join(', ')}</p>
        <div className="resource-links">
          {resources.map(([label, link]) => <a key={label} href={link} target="_blank" rel="noreferrer">{label}</a>)}
          {publication.abstract && <button onClick={() => setAbstractOpen(!abstractOpen)} aria-expanded={abstractOpen}>Abstract {abstractOpen ? '−' : '+'}</button>}
        </div>
        {abstractOpen && <p className="abstract">{publication.abstract}</p>}
      </div>
    </article>
  );
}

export default function Research() {
  return (
    <div className="page-shell interior-page narrow-page">
      <header className="page-heading">
        <h1>Research</h1>
        <p>I am broadly interested in theoretical computer science, with a focus on randomized and approximation algorithms.</p>
      </header>

      <section className="research-section" aria-labelledby="interests-title">
        <h2 id="interests-title">Interests</h2>
        <dl className="research-interests">
          <div><dt>Randomized algorithms</dt><dd>Using controlled randomness to design efficient algorithms with rigorous guarantees.</dd></div>
          <div><dt>Approximation algorithms</dt><dd>Efficiently finding solutions of provable quality when exact optimization is computationally expensive.</dd></div>
          <div><dt>Large-scale computation</dt><dd>Streaming and high-dimensional settings where time, memory, or access to data is limited.</dd></div>
          <div><dt>Stochastic processes</dt><dd>Earlier work on online learning and sequential learning in networks.</dd></div>
        </dl>
      </section>

      <section className="research-section" aria-labelledby="publications-title">
        <h2 id="publications-title">Publications</h2>
        <div className="publication-list">{publications.map(publication => <Publication key={publication.id} publication={publication} />)}</div>
      </section>
    </div>
  );
}
