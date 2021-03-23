import React from 'react';
import './FlatMarker.scss';

const FlatMarker = ({ selected, price }) => {
  const className = selected ? 'marker selected' : 'marker';
  return <div className={className}>{price}</div>
}

export default FlatMarker;