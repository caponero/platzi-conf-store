import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    // lat: data.lat, lng: data.lng
    lat: 4.635456, lng: -74.08768
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyDKdAyTTj5M6IcTyjp4V2CqsnUP7IQe5SE'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;