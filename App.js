import React, { useState } from "react";
import LocationModal from "./components/LocationModal";
import MapComponent from "./components/MapComponent";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";

function App() {
    const [showModal, setShowModal] = useState(true);
    const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
    const [addresses, setAddresses] = useState([]); // State to store saved addresses
    const [editingIndex, setEditingIndex] = useState(null); // State to track editing

    // Enable location functionality
    const enableLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setShowModal(false);
            },
            (error) => console.error(error)
        );
    };

    // Manually search location
    const searchManually = () => setShowModal(false);

    // Save a new address or update an existing one
    const saveAddress = (address) => {
        if (editingIndex !== null) {
            const updatedAddresses = [...addresses];
            updatedAddresses[editingIndex] = address;
            setAddresses(updatedAddresses);
            setEditingIndex(null); // Reset editing mode
        } else {
            setAddresses([...addresses, address]);
        }
    };

    // Edit an address
    const editAddress = (index) => {
        setEditingIndex(index);
    };

    // Delete an address
    const deleteAddress = (index) => {
        setAddresses(addresses.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {showModal ? (
                <LocationModal
                    onEnableLocation={enableLocation}
                    onSearchManually={searchManually}
                />
            ) : (
                <>
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Location & Address Flow</h1>
                    <MapComponent
                        currentPosition={currentPosition}
                        onLocateMe={enableLocation}
                    />
                    <AddressForm
                        onSave={saveAddress}
                        initialValues={editingIndex !== null ? addresses[editingIndex] : null}
                    />
                    {addresses.length > 0 ? (
                        <>
                            <h3>Total Saved Addresses: {addresses.length}</h3>
                            <AddressList
                                addresses={addresses}
                                onEdit={editAddress}
                                onDelete={deleteAddress}
                            />
                        </>
                    ) : (
                        <p style={{ textAlign: "center", marginTop: "20px" }}>
                            No saved addresses yet. Add a new address using the form above.
                        </p>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
