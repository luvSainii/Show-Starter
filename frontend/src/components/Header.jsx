import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'; // Import your custom CSS file

function Header() {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="black" className='container-fluid'>
        <Container fluid>
          <Navbar.Brand href="#" className="orange-text">Show Starter</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              variant="tabs"
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Room</Nav.Link>
              <Nav.Link href="#action3">Booking</Nav.Link>
              <Nav.Link href="#action4">FAQ'S</Nav.Link>
              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action5">Movies</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login" className="orange-text">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
