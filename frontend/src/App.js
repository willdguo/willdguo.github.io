import { Navbar, Container, Nav } from "react-bootstrap"
import Puzzles from "./components/Puzzles"
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
  
  return (

    <div className = "container">
      <NavBar />

      <Routes>
        <Route path = "/" element = {<Navigate replace to = "/home"/>} />
        <Route path = "/home" element = {"Hello World *insert description*"}/>
        <Route path = "/puzzles" element = {<Puzzles />}/>
        {/* <Route path = "/rants" element = {<Rants />} /> */}
      </Routes>

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
          <Nav.Link href = "/puzzles"> Puzzles </Nav.Link>
          {/* <Nav.Link href = "/rants"> Rants </Nav.Link>  */}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
