import profile from '../images/willguo6.png';

export default function About() {
  return <div className="page-shell interior-page">
    <header className="page-heading"><p className="eyebrow">About</p><h1>The person behind the proofs.</h1><p>Algorithms researcher, enthusiastic teacher, and occasional builder.</p></header>
    <section className="about-layout">
      <div className="about-photo"><img src={profile} alt="William Guo" /><p>Based in San Diego, California.</p></div>
      <div className="prose large-prose">
        <p>I’m a first-year PhD student in computer science at <a href="https://cse.ucsd.edu/" target="_blank" rel="noreferrer">UC San Diego</a>, where I’m advised by <a href="https://barnasaha.net/" target="_blank" rel="noreferrer">Barna Saha</a>. My home is theoretical computer science: I like problems where the right abstraction turns an impossible computation into a feasible one.</p>
        <p>Before UCSD, I completed a dual degree at the University of Pennsylvania. I worked with Erik Waingarten on algorithms for massive datasets and with Jie Gao on learning in networks. Earlier work with stochastic processes shaped how I think about randomness as both a mathematical object and an algorithmic resource.</p>
        <p>I planned a summer 2026 visit to the Max Planck Institute for Informatics as a research intern with Guy Even and Dani Dorfman.</p>
        <h2>Beyond research</h2>
        <p>Before finding theory, I spent time in the early-stage startup world, including a predictive grid-management startup and venture capital at Susquehanna International Group. Away from a whiteboard, I enjoy pickup soccer and volleyball, piano, and bouldering.</p>
      </div>
    </section>
  </div>;
}
