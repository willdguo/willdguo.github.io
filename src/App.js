import './App.css'
import { Navbar, Container, Nav } from "react-bootstrap"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Puzzles from "./components/Puzzles"
import PageNotFound from "./components/PageNotFound"
import { Routes, Route, Navigate } from "react-router-dom"
import Research from './pages/Research'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Bio from './components/Bio'

function App() {

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
          <Route path = "/home" element = {<Bio />}/>
          <Route path = "/puzzles" element = {<Puzzles />}/>
          {/* <Route path = "/rants" element = {<Rants />} /> */}
          <Route path = "/research" element = {<Research />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/blog" element = {<Blog />} />
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
          <Nav.Link href = "/blog"> Blog </Nav.Link>
          {/* <Nav.Link href = "/puzzles"> Puzzles </Nav.Link> */}
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
