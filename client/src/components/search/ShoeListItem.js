import React from 'react'
import { Card} from 'react-bootstrap';
import '../../styles/ShoeListItem.css'
import '../../styles/tables.css';
import '../../styles/buttons.css';

const ContactListItem = ({shoe}) => {



  return (
    
   <Card >
    <Card.Img variant="top" src={shoe.image} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{shoe.make}</Card.Title>
      <Card.Text>{shoe.model}</Card.Text>
      <Card.Text>{shoe.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">£{shoe.price}</small>
      <button >Add to cart</button>
    </Card.Footer>
  </Card>
  



    // <>
    //   <tr className="rowHover">
    //    <td className="left-align">{shoe.make}</td>
    //    <td className="left-align">{shoe.model}</td>
    //    <td>£{shoe.price}</td>
    //    <td>{shoe.gender}</td>
    //    <td>{shoe.description}</td>
    //    <td>
    //    <button className="details-button">Details</button>
    //    </td>
    //    <td>
    //    <button className="edit-button">Edit</button>
    //    </td>
    //   </tr>
    // </>
  )
}

export default ContactListItem
