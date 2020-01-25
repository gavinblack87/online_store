import React, { Component } from 'react';


import { Container, Row, Col } from 'react-bootstrap';
import  ShoeCard  from './ShoeCard';



class Shoes extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <Container>
                <Row>
                    {this.props.shoes.map(data => (
                        <Col className="mb-5" key={`${data.id}`}>
                            <ShoeCard shoe={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}



export default Shoes;