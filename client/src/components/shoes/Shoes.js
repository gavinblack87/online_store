import React, { Component } from 'react';


import { Container, Row, Col } from 'react-bootstrap';
import  ShoeCard  from './ShoeCard';



class Shoes extends Component {
    
    render(){
        return (
            <Container>
                <Row>
                    {this.props.shoes.map(data => (
                        <Col className="mb-5" key={`${data.id}`}>
                            <ShoeCard data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}



export default Shoes;