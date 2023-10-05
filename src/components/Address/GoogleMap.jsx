import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const GoogleMaps = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

useEffect(()=>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
       console.log('GeoLocation is not available on your browser...')
      }
},[])

  return (
    <LoadScript googleMapsApiKey="AIzaSyA-akSIOsRe9kHW5TasdRXOTIVrp0e7ixg" >
      {currentLocation && (
        <GoogleMap
          mapContainerStyle={{
            width: '50%',
            height: '500px',
            marginLeft:'25%',
            marginTop:'-14.5%'

          }}
          center={currentLocation}
          zoom={14}
        >
          <Marker position={currentLocation} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};


export default GoogleMaps;

