import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import '../../styles/navBarStyles.css';
import Logo from '../../images/gs_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { nike } from '../../images/adidaas.jpg'

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
    </Navbar.Collapse>


    <Nav>
    


    <NavDropdown title=<FontAwesomeIcon icon={faShoppingCart}/> alignRight>
    
      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <FontAwesomeIcon icon={faShoppingCart} /><span className="badge">items:2</span>
            
            <ul className="shopping-cart-items">
              <NavDropdown.Item>
                <li className="clearfix">
                  <span className="item-name">Nike air</span><br/>
                  <span className="item-size">size: UK 10.5</span><br/>
                  <span className="item-price">£10.99</span><br/>
                  <span className="item-quantity">Quantity: 01</span>
                </li>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <li className="clearfix">
                  <span className="item-name">Adidas Gazelle</span><br/>
                  <span className="item-size">size: UK 9</span><br/>
                  <span className="item-price">£70.99</span><br/>
                  <span className="item-quantity">Quantity: 01</span>
                </li>
              </NavDropdown.Item>
            </ul>
          </div> 
        </div>
        <div className="shopping-cart-total">
                <span className="lighter-text">Total:</span>
                <span className="main-color-text">£81.98</span>
              </div>
        <div className="checkout-button">
                    <a class="checkout" href="/" >Checkout</a>
                </div>   
      </div>
    </NavDropdown>


    <NavDropdown title="FAQ" id="returns-nav-dropdown" alignRight>
    
        <NavDropdown.Item>Returns</NavDropdown.Item>
        <NavDropdown.Item>Delivery Info</NavDropdown.Item>
        <NavDropdown.Item>Size guide</NavDropdown.Item>
    </NavDropdown>
    </Nav>
    </Navbar>
    
    
  

    
)
}

export default NavBar;