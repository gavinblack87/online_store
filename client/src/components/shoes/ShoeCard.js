import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import '../../styles/shoeCard.css'
import Shoe from '../../containers/ShoeContainer'



const ShoeCard = ({shoe}) => {
    return(
        <a href="/mens/nike" component={Shoe}>
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={require('../../'+shoe.logo_location)} />
            <div className="carddiv" >
                    <Card.Title className="mb-0 font-weight-bold">{shoe.make}</Card.Title>
                    <Card.Text className="mb-0">{shoe.model}</Card.Text>
                    <Badge pill className="mb-1" variant="warning">
                        £{shoe.price}
                    </Badge> 
                </div>
            
        </Card>
        </a>
    )
}

export default ShoeCard;

// const ShoeCard = (props) => {


//     return (
//         <Card >
//             <Card.Img variant="top" src={Data.[1].image} />
//             <Card.Body className="d-flex flex-column">
//                 <Card.Title>{Data.[1].make}</Card.Title>
//                 <Card.Text>{shoe.model}</Card.Text>
//                 <Card.Text>{shoe.description}</Card.Text>
//             </Card.Body>
//             <Card.Footer>
//                 <small className="text-muted">£{shoe.price}</small>
//                 <button >Add to cart</button>
//             </Card.Footer>
//         </Card>
//     )
// }