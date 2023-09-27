import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'; // Import your custom CSS file

function Header() {
  const [activeTab, setActiveTab] = useState('Home'); // Initialize with the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
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
              <Nav.Link href="#action1" className={activeTab === 'Home' ? 'active-tab' : ''} onClick={() => handleTabClick('Home')}>Home</Nav.Link>
              <Nav.Link href="#action2" className={activeTab === 'Room' ? 'active-tab' : ''}
            onClick={() => handleTabClick('Room')}>Room</Nav.Link>
              <Nav.Link href="#action3" className={activeTab === 'Booking' ? 'active-tab' : ''}
            onClick={() => handleTabClick('Booking')}>Booking</Nav.Link>
              <Nav.Link href="#action4" className={activeTab === 'FAQ' ? 'active-tab' : ''}
            onClick={() => handleTabClick('FAQ')}>FAQ'S</Nav.Link>
              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action5" className={activeTab === 'Movies' ? 'active-tab' : ''}
            onClick={() => handleTabClick('Movies')}>Movies</NavDropdown.Item>
                <NavDropdown.Item href="#action6" className={activeTab === 'Another-action' ? 'active-tab' : ''}
            onClick={() => handleTabClick('Another-action')}>Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7" className={activeTab === 'Something-else' ? 'active-tab' : ''}
            onClick={() => handleTabClick('Something-else')}>Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text className='text-white'>
              Signed in as: <a href="#login" className="orange-text">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
