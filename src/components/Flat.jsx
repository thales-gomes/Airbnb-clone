import React from 'react';
import './Flat.scss'

const Flat = ({ price, name, imageUrl, onSelect, id, selected }) => {
  const className = selected ? 'flat selected' : 'flat';
  return (
    <div className={className} onClick={() => onSelect(id)}>
      <img className="flat-picture" src={imageUrl} alt="flat"/>
      <div className="flat-title">
        <strong>{price}£</strong> - {name}
      </div>
    </div>
  )
}

export default Flat;
