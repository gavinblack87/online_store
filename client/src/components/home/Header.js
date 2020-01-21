import React, {Component} from 'react';
import Logo from '../../images/goldenShoeLogo.png';
import '../../styles/headerStyles.css';

class Header extends Component {
    render() {
      return(
        <>
        <div className='headerLogo'><img src={Logo} className='logo' alt='Golden Shoe logo'></img></div>
        </>
      );
    }
  }
  
  
  
  export default Header;