import React from 'react'
import ShoeListItem from './ShoeListItem';

const ShoeList = ({shoes}) => {
  const shoeNodes = shoes.map((shoe, index)=> {
    return (
      <>
      <ShoeListItem shoe={shoe} key={index}/>
      </>
    )
  });
  return(
    <>
      <tr>
        <td>{shoeNodes}</td>
      </tr>
    </>
  )
}

export default ShoeList;