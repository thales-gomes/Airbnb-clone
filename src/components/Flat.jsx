import React from 'react';
import './Flat.scss'

const Flat = (props) => {
  const { price, name, imageUrl } = props;
  console.log(imageUrl)
  return (
    <div className="flat">
      <img className="flat-picture" src={imageUrl} alt="flat"/>
      <div className="flat-title">
        {price} - {name}
      </div>
    </div>
  )
}

export default Flat;