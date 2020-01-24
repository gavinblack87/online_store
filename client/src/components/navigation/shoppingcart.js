import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


(function() {
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle("fast");
    });
  })()

  <div className="container">

    <ul className="right">
      <li><a href="#" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">2</span></a></li>
    </ul> 
  </div> 



<div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
    <FontAwesomeIcon icon={faShoppingCart} /><span className="badge">2</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">£81.98</span>
      </div>
    </div> 
    

    <ul className="shopping-cart-items">
      <li className="clearfix">
        <img src={nike} alt="item1" width="50"/>
        <span className="item-name">Nike air</span>
        <span className="item-price">£10.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>

      <li className="clearfix">
        <img src={adidas} alt="item2" width="50"/>
        <span className="item-name">Adidas Gazelle</span>
        <span className="item-price">£70.99</span>
        <span className="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="/home" className="button">Checkout</a>
  </div> 
</div>

</div>