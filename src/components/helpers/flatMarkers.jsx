import React from "react";
import { Marker } from 'react-mapbox-gl';
import FlatMarker from "../FlatMarker";

const flatMarkers = (flats, selected) => {
  const markers = flats.map(({ price, id, lng, lat }) => {
    return (
      <Marker coordinates={[lng, lat]}>
        <FlatMarker
          key={id}
          price={price}
          selected={selected === id} />
      </Marker>
    )}
  )
  return markers
}

export default flatMarkers