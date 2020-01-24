import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import '../../styles/banner.css'
import men from '../../images/shopmen.jpg'
import women from '../../images/shopwomen.jpg'

class Banners extends Component {
    

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Image className="img" src={men} ></Image>
                    </Col>
                    <Col >
                        <Image className="img2" src={women}></Image>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Banners;