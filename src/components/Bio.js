import './Bio.css'
import profpic from '../images/willguo6.png'

function Bio() {
    // const date = new Date();

    const bioStyle = {
        maxWidth: '600px',
        margin: '0',
        padding: '20px',
      }
    
    return (
        <div className='bio'>
    
          <div className='profpic'>
            <img src={profpic} style={{maxWidth: '300px'}} alt="Profile"/>
          </div>
    
          <div style = {bioStyle}>
            <p>
              Hi! I'm William, a third year dual-degree bachelor's student at UPenn studying CS and Statistics. 
              I'm interested in the design and analysis of algorithms, particularly for large datasets and graphs.
              Currently, I am fortunate enough to work with <a href="https://sites.google.com/site/erikwaing/home?authuser=0" target="_blank" rel="noreferrer">Erik Waingarten</a> on
              space-limited streaming algorithms for principal component analysis.
            </p>
            <p>
              {/* I am a teaching assistant for an intro discrete math course, and am a frontend dev for Penn Labs, where I build web apps for our student body.  */}
              I'm a huge fan of puzzles of all kinds, namely lateral thinking puzzles and quantitative brain teasers.
              I'm also fascinated by the tech startup scene, and was previously a research fellow for <a href="https://research.contrary.com/company?author=William+Guo" target="_blank" rel="noreferrer"> Contrary</a>.
              In my free time, I enjoy pickup soccer/volleyball, playing piano, and bouldering. 
            </p>

            <br />
          </div>
        </div>
    )
}

export default Bio;