import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, FormControl,Button, Form } from 'react-bootstrap';
import '../../styles/navBarStyles.css';
import Logo from '../../images/goldenShoeLogo.png';

const NavBar = (props) => (
<Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Mens" id="mens-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Trainers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
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
      <Navbar.Brand>
  <a href="#">
          <img src={Logo} style={{width:100, marginTop: -7}} />
          </a>
  </Navbar.Brand>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


//   <div id='nav' className="sticky">
//   <ul>
//     <li>
//       <Link to='/'>HOME</Link>
//     </li>
//     <li>
//       <NavLink to='/contact' activeClassName="current">CONTACT</NavLink>
//     </li>
//     <li>
//       <NavLink to='/mens' activeClassName="current">Mens</NavLink>
//     </li>
//     <li>
//       <NavLink to='/womens' activeClassName="current">Womens</NavLink>
//     </li>
//     <li>
//       <NavLink to='/kids' activeClassName="current">Kids</NavLink>
//     </li>
//   </ul>
//   </div>
);

export default NavBar;