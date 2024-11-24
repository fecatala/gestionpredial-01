import React from 'react';
import { GoogleMap, Circle, Marker, useLoadScript } from '@react-google-maps/api';

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

interface MapSelectorProps {
  center: { lat: number; lng: number };
  radius: number;
  onCenterChange: (center: { lat: number; lng: number }) => void;
  onRadiusChange: (radius: number) => void;
}

export default function MapSelector({ center, radius, onCenterChange, onRadiusChange }: MapSelectorProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
    libraries,
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      onClick={(e) => {
        if (e.latLng) {
          onCenterChange({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }
      }}
    >
      <Marker position={center} />
      <Circle
        center={center}
        radius={radius * 1000} // Convert km to meters
        options={{
          fillColor: '#4ade80',
          fillOpacity: 0.2,
          strokeColor: '#16a34a',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  );
}