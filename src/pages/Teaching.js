const roles = [
  ['Fall 2025', 'ESE 5300', 'Elements of Probability Theory', 'Head TA'],
  ['Spring 2025', 'CIS 3200', 'Introduction to Algorithms', 'Head of Homework Committee'],
  ['Spring & Fall 2024', 'CIS 1600', 'Discrete Math', 'Head of Homework Committee'],
];
export default function Teaching() { return <div className="page-shell interior-page narrow-page"><header className="page-heading"><p className="eyebrow">Teaching</p><h1>Learning by explaining.</h1><p>I care about helping students build intuition first, then giving that intuition a precise mathematical shape.</p></header><section className="timeline" aria-label="Teaching experience">{roles.map(([term, code, name, role]) => <article key={code}><p className="timeline-date">{term}</p><div><p className="card-label">{code}</p><h2>{name}</h2><p>{role} · University of Pennsylvania</p></div></article>)}</section></div>; }
