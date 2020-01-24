import React from 'react';
import mainImage from '../../images/adidas.jpg'
import smallImage1 from '../../images/adidas_small1.jpg'
import smallImage2 from '../../images/adidas_small3.jpg'
import smallImage3 from '../../images/adidaas.jpg'
import '../../styles/shoepage.css'

const ShoePage = (props) => {
    return (
        <div className="container">
            <div className="shoeContainer">
                <div className="shoeThumbs">
                    <ul className="thumbList">
                        <li>
                            <img className="thumbs" src={smallImage1} alt="thumb1"></img>
                        </li>
                        <li>
                            <img className="thumbs" src={smallImage2} alt="thumb2"></img>
                        </li>
                        <li>
                            <img className="thumbs" src={smallImage3} alt="thumb3"></img>
                        </li>
                    </ul>
                </div>
                    <img className="main" src={mainImage} alt="mainImage"></img>
                    <div className="shoeInfo">
                        <h3>Adidas</h3>
                        <h5>Superstar</h5>
                        <h5>£70.99</h5>
                        <div className="select">
                        <select className="sizes" name="size">
                            <option value="0">Select a Size:</option>
                            <option value="7">UK 7</option>
                            <option value="7.5">UK 7.5</option>
                            <option value="8">UK 8</option>
                            <option value="8.5" disabled>UK 8.5 - out of stock</option>
                            <option value="9">UK 9</option>
                            <option value="9.5">UK 9.5</option>
                            <option value="10">UK 9</option>
                            <option value="10.5">UK 10.5</option>
                            <option value="11" disabled>UK 11 - out of stock</option>
                            <option value="12">UK 12</option>
                        </select>
                        <div>
                            <a href="/" className="sizeguide" >Size guide</a>
                        </div>
                        </div>
                        <div class="button_cont" align="left">
                            <a class="example_c" href="/" >Add to Basket</a>
                        </div>
                        
                    </div>
                    
            </div>
            
        </div>
           
    )
}


export default ShoePage;