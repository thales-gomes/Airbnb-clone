import React from "react";
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_mapKey
});
  
const MapDisplay = (center, flatMarkers, filteredFlats, selected) => {
  return (
    <div className="map">
    <Map
      zoom={[14]}
      center={center}
      containerStyle={{ height: "100vh", width: "100%" }}
      style="mapbox://styles/mapbox/streets-v8">
        {flatMarkers(filteredFlats, selected)}
    </Map>
  </div>
  )
}

export default MapDisplay;