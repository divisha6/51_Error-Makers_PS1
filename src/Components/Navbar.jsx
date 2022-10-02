import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><h2 style={{fontWeight:"500"}}> 
               <em style={
                    {color: '#2196f3'}
                }>ERROR </em>
                <em style={
                    {color: 'white'}
                }>MAKERS</em></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:"white",fontWeight:"600"}} href="/Login">Login</Nav.Link>
            <Nav.Link style={{color:"white",fontWeight:"600"}} href="/AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;