import './Bio.css'
import profpic from '../images/willguo6.png'
import RandomWalkBackground from './RandomWalkBackground';

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
              Hi! I'm William, an incoming first year CS PhD student at UCSD advised by
              {" "} 
              <a 
                href = "https://barnasaha.net/"
                target = "_blank"
                rel = "noreferrer">
                Barna Saha
              </a>.
              
              I'm broadly interested in theoretical computer science, with a focus on randomized/approximation algorithms.
              {/* fourth year Engineering & Wharton undergrad at UPenn studying CS and Statistics. I'm broadly interested in theoretical computer science, and the use of randomization/approximation for large-scale computation. Some topics I have worked on include streaming algorithms, problems in high-dimensional geometry, and learning in random networks.  */}
            </p>
            <p>  
              Previously, I graduated with a dual degree from Penn, and have been fortunate enough to work with{" "}
              <a
                href="https://sites.google.com/site/erikwaing/home?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
               Erik Waingarten
              </a>{" "}
              and{" "}
              <a
              href="https://sites.rutgers.edu/jie-gao/about/"  
              target="_blank"
              rel="noreferrer"
              >
              Jie Gao
              </a>
              . 
                            
              During Summer 2026, I'll be visiting the Max Planck Institute for Informatics as a research intern under 
              {" "}
              <a
                href = "https://sites.google.com/view/guyeven/"
                target = "_blank"
                rel = "noreferrer"
              >
                Guy Even  
              </a>
              {" "}&{" "}
              <a
                href = "https://danidorfman.com/"
                target = "_blank"
                rel = "noreferrer">
                  Dani Dorfman
              </a>. 

              {/* I also participated in the DIMACS REU, advised by Jie Gao.  */}
              {/* I am fortunate enough to work with Erik Waingarten on algorithms for massive datasets. */}

              {/* {" "}
              <a
                href="https://sites.google.com/site/erikwaing/home?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Erik Waingarten
              </a>{" "} */}
            {/* {" "} Over Summer 2025, I researched social learning in networks under Jie Gao as a participant in the DIMACS REU. */}

            {/* {" "} 
            <a
              href="https://sites.rutgers.edu/jie-gao/about/"  
              target="_blank"
            >
              Prof. Jie Gao
            </a>  */}
            {/* {" "}<a href="https://reu.dimacs.rutgers.edu/" target="_blank">DIMACS REU</a>. */}
            </p> 
          </div>
        </div>

        <div className="bio-bottom">
          <div className="teaching-experience">
            <h4>Teaching Experience</h4>
            <ul>
              <li> ESE 5300: Elements of Probability Theory, Head TA (Fall 2025)</li>
              <li> CIS 3200: Introduction to Algorithms, Head of Homework Committee (Spring 2025)</li>
              <li> CIS 1600: Discrete Math, Head of Homework Committee (Spring 2024, Fall 2024)</li>
            </ul>
          </div>

          <div className="other-experience">
            <h4>Other</h4>
            <ul>
              <li>Before discovering TCS, I was quite invested in the early-stage startup space. I previously interned at a predictive grid management startup, and before this, I was a venture capital intern at Susquehanna International Group. </li>
              <li> In my free time, I enjoy pickup soccer/volleyball, playing piano, and bouldering. </li>
              {/* <li>Notes for{' '}
                  <a 
                  href="https://willdguo.github.io/quartz/NETS-4120-Lecture-Notes"
                  target="_blank"
                  rel="noreferrer"
                >
                  NETS 4120: Algorithmic Game Theory
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <RandomWalkBackground />
      </div>
    )
}

export default Bio;