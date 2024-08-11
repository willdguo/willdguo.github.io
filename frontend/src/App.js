import './App.css'
import profpic from './images/willguo6.png'
import { Navbar, Container, Nav } from "react-bootstrap"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Puzzles from "./components/Puzzles"
import PageNotFound from "./components/PageNotFound"
import { Routes, Route, Navigate } from "react-router-dom"
import Research from './pages/Research'
import Projects from './pages/Projects'

function App() {

  const bioStyle = {
    maxWidth: '600px',
    margin: '0',
    padding: '20px',
  }

  const bio = (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: '20px',
        // marginBottom: '20px',
        // overflow: "auto",
        // height: "calc(80vh - 10px)",
        }}
      >

      <div>
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
      </div>
    </div>
  )

  const rootStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  
  return (

    <div style={rootStyle}>
      <NavBar />
    
      <div className = "container"
        style={{
          minHeight: "calc(100vh - 160px)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Routes>
          <Route path = "/" element = {<Navigate replace to = "/home"/>} />
          <Route path = "/home" element = {bio}/>
          <Route path = "/puzzles" element = {<Puzzles />}/>
          {/* <Route path = "/rants" element = {<Rants />} /> */}
          <Route path = "/research" element = {<Research />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/*" element = {<Navigate replace to = "/404"/>} />
          <Route path = "/404" element = {<PageNotFound />} />
        </Routes>
      </div>

      <SocialBar />
    </div>
    
  )
}

const NavBar = () => {

  return (
    <Navbar bg = "light" data-bs-theme = "light" >
      <Container>
        <Navbar.Brand href = "/home"> William Guo </Navbar.Brand>
        <Nav>
          <Nav.Link href = "/home"> Home </Nav.Link>
          <Nav.Link href = "/research"> Research </Nav.Link>
          <Nav.Link href = "/projects"> Projects </Nav.Link>
          <Nav.Link href = "/puzzles"> Puzzles </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

const SocialBar = () => {

  return (
    <div style={{
        position: 'relative',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f8f9fa' 
      }}
    >
      <p style={{color: '#aaa'}}>
        willguo6 *at* wharton *dot* upenn *dot* edu
      </p>
      <a className="social-icon" href = "https://x.com/willdguo" target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>
      <a className="social-icon" href="https://github.com/willdguo" target="_blank" rel="noreferrer">
        <FaGithub/>
      </a>
      <a className="social-icon" href = "https://www.linkedin.com/in/willdguo/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
  ) 
}

export default App;
