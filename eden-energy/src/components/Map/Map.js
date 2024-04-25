import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '80%',
  height: '400px',
};

const center = {
  lat: -33.988503,
  lng: 22.452064,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB0XsMFApTOlKycFYW-6eD89VanWMoX4KY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
