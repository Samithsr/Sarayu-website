import React from 'react'

const Img = ({img,title}) => {
    console.log()
  return (
    <img 
    src={img.type} 
    alt={title} 
    className="product-image"
  />
  )
}

export default Img