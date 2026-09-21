import { useState } from 'react';
import publications from '../data/publications';

function Publication({ publication }) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const resources = [['PDF', publication.pdf], ['arXiv', publication.arxiv], ['Slides', publication.slides], ['Code', publication.code], ['BibTeX', publication.bibtex]].filter(([, link]) => link);
  return <article className="publication">
    <div className="publication-year">{publication.year}</div>
    <div><p className="card-label">{publication.venue}</p><h2>{publication.title}</h2><p className="authors">{publication.authors.join(' · ')}</p>
      <div className="resource-links">{resources.map(([label, link]) => <a key={label} href={link} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>)}
        {publication.abstract && <button onClick={() => setAbstractOpen(!abstractOpen)} aria-expanded={abstractOpen}>Abstract {abstractOpen ? '−' : '+'}</button>}
      </div>{abstractOpen && <p className="abstract">{publication.abstract}</p>}
    </div>
  </article>;
}

export default function Publications() {
  return <div className="page-shell interior-page narrow-page"><header className="page-heading"><p className="eyebrow">Publications</p><h1>Work, in detail.</h1><p>Paper links and supporting materials. This list is intentionally short: I’m at the beginning of my PhD.</p></header><section className="publication-list">{publications.map(p => <Publication key={p.id} publication={p} />)}</section></div>;
}
