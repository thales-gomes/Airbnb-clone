import React from 'react';
import './Flat.scss'

const Flat = (props) => {
  const {price, name} = props;
  return (
    <div className="flat">
      <img className="flat-picture" alt="flat"/>
      <div className="flat-title">
        {price} - {name}
      </div>
    </div>
  )
}

export default Flat;