import React from 'react';

const AddressList = ({ addresses, onEdit, onDelete }) => {
    return (
        <div className="address-list">
            {addresses.length === 0 ? (
                <p>No saved addresses. Please add an address.</p>
            ) : (
                addresses.map((address, index) => (
                    <div className="address-item" key={index}>
                        <div>
                            <h4>{address.house}</h4>
                            <p>{address.apartment}</p>
                            <p><strong>Category:</strong> {address.category}</p>
                        </div>
                        <div>
                            <button className="edit" onClick={() => onEdit(index)}>Edit</button>
                            <button className="delete" onClick={() => onDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AddressList;
