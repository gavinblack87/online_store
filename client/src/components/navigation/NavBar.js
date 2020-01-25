import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import '../../styles/navBarStyles.css';
import Logo from '../../images/gs_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import adidas from '../../images/adidas.jpg';
import dr from '../../images/dr.jpg';

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
            
            <div className="shopping-cart-items">
              <NavDropdown.Item>
                <div className="clearfix">
                <img className="cart-image" src={adidas} alt="nike"></img>
                <div>
                  <span className="item-name" alignRight>Adidas</span><br/>
                  <span className="item-model" alignRight>Superstar</span><br/>
                  <span className="item-size" alignRight>size: UK 7</span><br/>
                  <span className="item-quantity">Quantity: 01</span><br/>
                  <span className="item-price">£70.00</span><br/> 
                  </div>
                </div>
              </NavDropdown.Item>
              <hr/>
              <NavDropdown.Item>
              <div className="clearfix">
                <img className="cart-image" src={dr} alt="nike"></img>
                <div>
                  <span className="item-name" alignRight>Dr Martins</span><br/>
                  <span className="item-model" alignRight>Combs Tech</span><br/>
                  <span className="item-size" alignRight>size: UK 10.5</span><br/>
                  <span className="item-quantity">Quantity: 01</span><br/>
                  <span className="item-price">£101.99</span><br/>
                  </div>
                </div>
              </NavDropdown.Item>
              <hr/>
            </div>
          </div> 
        </div>
        <div className="shopping-cart-total">
                <span className="lighter-text">Total:</span>
                <span className="main-color-text">£171.99</span>
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