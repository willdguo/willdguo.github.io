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
              Hi! I'm William, a third-year dual-degree bachelor's student at UPenn
              studying CS and Statistics. I'm broadly interested in the design and analysis of
              algorithms. Some topics I am particularly interested in are sublinear algorithms, 
              combinatorial optimization, and online learning. Currently, I am fortunate enough to work with{" "}
              <a
                href="https://sites.google.com/site/erikwaing/home?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Erik Waingarten
              </a>{" "}
              on space-limited streaming algorithms for principal component analysis.
            </p>
            <p>
              I'm a huge fan of puzzles of all kinds, namely lateral thinking puzzles
              and quantitative brain teasers. In my free time, I enjoy pickup
              soccer/volleyball, playing piano, and bouldering. Before discovering TCS,
              I was obsessed with the startup space, and was particularly fascinated
              by innovative climate technologies. 
            </p>
          </div>
        </div>

        <div className="bio-bottom">
          <div className="teaching-experience">
            <h4>Teaching Experience</h4>
            <ul>
              <li> ESE 5300: Elements of Probability Theory (Incoming, Fall 2025)</li>
              <li> CIS 3200: Introduction to Algorithms, Head of Homework Committee (Spring 2025)</li>
              <li> CIS 1600: Discrete Math, Head of Homework Committee (Fall 2024, Spring 2024)</li>
            </ul>
          </div>

          <div className="course-notes">
            <h4>Notes</h4>
            <a 
              href="https://willdguo.github.io/quartz/NETS-4120-Lecture-Notes"
              target="_blank"
              rel="noreferrer"
            >
              NETS 4120: Algorithmic Game Theory
            </a>
          </div>
        </div>
      </div>
    )
}

export default Bio;