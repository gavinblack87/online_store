import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import '../../styles/navBarStyles.css';
import Logo from '../../images/gs_logo.jpg';

const NavBar = (props) => {

return (
<Navbar sticky="top">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Navbar.Brand>
        <a href="/">
          <img src={Logo} style={{width:50, marginTop: -7, marginBottom: -7}}  />
        </a>
      </Navbar.Brand>
      <NavDropdown title="Mens" id="mens-nav-dropdown" activeclassname="current">
        <NavDropdown.Item href="/mens">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="/mens">Trainers</NavDropdown.Item>
        <NavDropdown.Item href="/mens">Boots</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Womens" id="womens-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Kids" id="kids-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Form className="search" alignRight>
        <FormControl type="text" placeholder="Search"/>
      </Form>
    </Nav>

    <Nav>
    <NavDropdown title="FAQ" id="returns-nav-dropdown" alignRight>
        <NavDropdown.Item>Returns</NavDropdown.Item>
        <NavDropdown.Item>Delivery Info</NavDropdown.Item>
        <NavDropdown.Item>Size guide</NavDropdown.Item>
    </NavDropdown>
    </Nav>
    
    
    </Navbar.Collapse>
</Navbar>

    
)
}

export default NavBar;