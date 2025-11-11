import './Bio.css'
import profpic from '../images/willguo6.png'

function Bio() {
    // const date = new Date();

    // const bioStyle = {
    //     maxWidth: '600px',
    //     margin: '0',
    //     padding: '20px',
    //   }
    
    return (
      <div className="bio-container">
        <div className="bio-top">
          <div className="profpic">
            <img src={profpic} alt="Profile" />
          </div>

          <div className="bio-text">
            <h4>About Me</h4>
            <p>
              Hi! I'm William, a fourth year Engineering & Wharton undergrad at UPenn studying CS and Statistics. I'm broadly interested in probability and its uses in theoretical computer science. Some topics I am particularly interested in are combinatorial optimization, random processes on networks, and high-dimensional datasets. 
            </p>
            <p>  
              I am fortunate enough to work with{" "}
              <a
                href="https://sites.google.com/site/erikwaing/home?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Erik Waingarten
              </a>{" "}
              on online algorithms for large datasets.
            Over Summer 2025, I worked on sequential truth learning in social networks under{" "} 
            <a
              href="https://sites.rutgers.edu/jie-gao/about/"  
              target="_blank"
            >
              Prof. Jie Gao
            </a> as a participant in the{" "}<a href="https://reu.dimacs.rutgers.edu/" target="_blank">DIMACS REU</a>.
            </p> 
          </div>
        </div>

        <div className="bio-bottom">
          <div className="teaching-experience">
            <h4>Teaching Experience</h4>
            <ul>
              <li> ESE 5300: Elements of Probability Theory (Fall 2025)</li>
              <li> CIS 3200: Introduction to Algorithms, Head of Homework Committee (Spring 2025)</li>
              <li> CIS 1600: Discrete Math, Head of Homework Committee (Fall 2024, Spring 2024)</li>
            </ul>
          </div>

          <div className="other-experience">
            <h4>Other</h4>
            <ul>
              <li>Before discovering TCS, I was interested in software & startups. I previously interned as a SDE at Epic Systems, and before this, I was a venture capital intern at Susquehanna International Group. </li>
              <li> In my free time, I enjoy pickup soccer/volleyball, playing piano, and bouldering. </li>
              <li>Notes for{' '}
                  <a 
                  href="https://willdguo.github.io/quartz/NETS-4120-Lecture-Notes"
                  target="_blank"
                  rel="noreferrer"
                >
                  NETS 4120: Algorithmic Game Theory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Bio;