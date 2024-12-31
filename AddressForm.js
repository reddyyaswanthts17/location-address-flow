import React, { useState, useEffect } from 'react';

const AddressForm = ({ onSave, initialValues }) => {
    const [address, setAddress] = useState({
        house: '',
        apartment: '',
        category: 'Home',
    });

    useEffect(() => {
        if (initialValues) {
            setAddress(initialValues);
        }
    }, [initialValues]);


    const handleChange = (e) => setAddress({ ...address, [e.target.name]: e.target.value });

    return (
        <form onSubmit={(e) => { e.preventDefault(); onSave(address); }}>
            <input name="house" placeholder="House/Flat/Block No." value={address.house} onChange={handleChange} />
            <input name="apartment" placeholder="Apartment/Road/Area" value={address.apartment} onChange={handleChange} />
            <select name="category" value={address.category} onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Friends & Family">Friends & Family</option>
            </select>
            <button type="submit">Save Address</button>
        </form>
    );
};

export default AddressForm;
