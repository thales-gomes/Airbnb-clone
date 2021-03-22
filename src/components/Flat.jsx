import React from 'react';
import './Flat.scss'

const Flat = (props) => {
  const { price, name, imageUrl, onClick } = props;
  
  return (
    <div className="flat" onClick={() => onClick()}>
      <img className="flat-picture" src={imageUrl} alt="flat"/>
      <div className="flat-title">
        <strong>{price}£</strong> - {name}
      </div>
    </div>
  )
}

export default Flat;