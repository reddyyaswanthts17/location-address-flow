import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapComponent = ({ currentPosition, onLocateMe }) => {
    const [markerPosition, setMarkerPosition] = useState(currentPosition);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBukLi5WT0NDQ0UPejmhJOpXQkT2Dze_x8',
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={currentPosition}
                zoom={15}
                onClick={(e) => setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
            >
                <Marker position={markerPosition} />
            </GoogleMap>
            <button onClick={onLocateMe} style={{ marginTop: "10px" }}>Locate Me</button>
        </div>
    );
};

export default MapComponent;
