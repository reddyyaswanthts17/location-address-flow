require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary storage for addresses
let addresses = [];

// Fetch all addresses
app.get("/addresses", (req, res) => {
    res.json(addresses);
});

// Add a new address
app.post("/addresses", (req, res) => {
    const newAddress = req.body;
    addresses.push(newAddress);
    res.status(201).send("Address saved!");
});

// Update an existing address
app.put("/addresses/:id", (req, res) => {
    const { id } = req.params;
    const updatedAddress = req.body;

    if (id >= 0 && id < addresses.length) {
        addresses[id] = updatedAddress;
        res.send("Address updated!");
    } else {
        res.status(404).send("Address not found!");
    }
});

// Delete an address
app.delete("/addresses/:id", (req, res) => {
    const { id } = req.params;

    if (id >= 0 && id < addresses.length) {
        addresses = addresses.filter((_, index) => index !== parseInt(id));
        res.send("Address deleted!");
    } else {
        res.status(404).send("Address not found!");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
