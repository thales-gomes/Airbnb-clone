import React from "react";
import { Marker } from 'react-mapbox-gl';
import FlatMarker from "../FlatMarker";

const flatMarkers = (flats, selected) => {
  const markers = flats.map(flat => {
    const { price, id } = flat
    return (
      <Marker coordinates={[flat.lng, flat.lat]}>
        <FlatMarker
          key={id}
          price={price}
          selected={selected === flat.id} />
      </Marker>
    )}
  )
  return markers
}

export default flatMarkers