import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/infoNav.css'

const InfoNav = () => {
    return (
        <Container className="infonav">
            <Row  >
                <Col className="infonavcol1">Easy Returns</Col>
                <Col className="infonavcol2">New Customer Discounts</Col>
                <Col className="infonavcol3">Contact 24/7</Col>
            </Row>
        </Container>
    )
}

export default InfoNav;