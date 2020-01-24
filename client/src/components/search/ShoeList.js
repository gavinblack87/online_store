import React from 'react'
import ShoeListItem from './ShoeListItem';
import { Col, Container, CardDeck, Row } from 'react-bootstrap';

const ShoeList = ({shoes}) => {
  const shoeNodes = shoes.map((shoe, index)=> {
    return (
        <Col xs={3} className="mb-5" key={`${shoe.id}`}>
            <ShoeListItem shoe={shoe} key={index}/>
            </Col>
    )
  });
  return(
      <Container>
      <Row>
      
    
      {shoeNodes}

      </Row>
      </Container>
  )
}

export default ShoeList;