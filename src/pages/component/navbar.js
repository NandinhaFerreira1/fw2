import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
    <Container>
    <Navbar expand="sm" className={`${style.navGradient} px-3 my-0 border border-2 border border-primary rounded`} >
      
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

