import React, { Component } from 'react';
import '../../styles/banner.css'
import men from '../../images/shop-mens.jpg'
import women from '../../images/shop-womens2.jpeg'

class Banners extends Component {
    

    render(){
        return(
            <div className="shop-mw">
                <div className="mens">
                    <a href="/mens" title="Shop Mens styles now">
                        <h5 className="mens-boots">Shop Men's Boots</h5>
                        <img src={men} alt="inn_logo" />
                    </a>
                </div>
                <div className="womens">
                    <a href="/mens" title="Shop Womens styles now">
                        <h5 className="womens-boots">Shop Women's Boots</h5>
                        <img src={women} alt="ccs_logo" /> 
                    </a>  
                </div>
            </div>
            
        )
    }
}

export default Banners;