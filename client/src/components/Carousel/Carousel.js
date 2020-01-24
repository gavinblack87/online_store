import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/carousel.css'
const roll1 = require('../../images/womens_shoes.jpg')
const roll2 = require('../../images/purple_converse.jpg')
const roll3 = require('../../images/nike_tryon.jpeg')


const RollingImage = (props) => (

<Carousel controls='true' keyboard='true' interval='4000' pauseOnHover='true' slide='true'  >
<Carousel.Item>
    <img
      width="100%"
      className="d-block"
      src={roll2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="100%"
      className="d-block"
      src={roll3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="running_carousel1">Run</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="100%"
      className="d-block"
      src={roll1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="running_carousel2">Walk</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel>
)

export default RollingImage;