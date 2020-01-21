import React from 'react'
import '../../styles/ShoeListItem.css'
import '../../styles/tables.css';
import '../../styles/buttons.css';

const ContactListItem = ({shoe}) => {



  return (
    <>
      <tr className="rowHover">
       <td className="left-align">{shoe.make}</td>
       <td className="left-align">{shoe.model}</td>
       <td>£{shoe.price}</td>
       <td>{shoe.gender}</td>
       <td>{shoe.description}</td>
       <td>
       <button className="details-button">Details</button>
       </td>
       <td>
       <button className="edit-button">Edit</button>
       </td>
      </tr>
    </>
  )
}

export default ContactListItem
