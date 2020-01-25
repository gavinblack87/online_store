import React from 'react';
import '../../styles/footer.css'
import logo from '../../images/gs_logo.jpg'

const Footer = () => {
    return (
        <div className="footer">
        <div className="help-div">
            <span className="Help">
                <h5 className="help-tital">Help</h5><hr/>
                <a href="#" className="help-anchor">Track Order</a><br/>
                <a href="#" className="help-anchor">Delivery Info</a><br/>
                <a href="#" className="help-anchor">Contact us</a><br/>
                <a href="#" className="help-anchor">Returns Policies</a>
            </span>
        </div>
        <div className="socials-div">
            <span className="socials" >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <p className="social-logo">Facebook <a href="#" class="fa fa-facebook"></a></p>
                <p className="social-logo">Twitter     <a href="#" class="fa fa-twitter"></a></p>
                
                <p className="social-logo">Instagram <a href="#" class="fa fa-instagram"></a></p>
                
            </span>
            </div>
        </div>
    )
}

export default Footer;