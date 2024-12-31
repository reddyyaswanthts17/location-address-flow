import React from 'react';

const LocationModal = ({ onEnableLocation, onSearchManually }) => (
    <div className="modal">
        <p>Allow location access or search manually.</p>
        <button onClick={onEnableLocation}>Enable Location</button>
        <button onClick={onSearchManually}>Search Manually</button>
    </div>
);

export default LocationModal;
