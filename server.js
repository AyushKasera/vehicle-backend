const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Dummy vehicle data simulating moderate movement
const vehicleData = [
    { latitude: 17.385044, longitude: 78.486671, timestamp: "2024-07-20T10:00:00Z" },
    { latitude: 17.385104, longitude: 78.486731, timestamp: "2024-07-20T10:00:05Z" },
    { latitude: 17.385164, longitude: 78.486791, timestamp: "2024-07-20T10:00:10Z" },
    { latitude: 17.385224, longitude: 78.486851, timestamp: "2024-07-20T10:00:15Z" },
    { latitude: 17.385284, longitude: 78.486911, timestamp: "2024-07-20T10:00:20Z" },
    { latitude: 17.385344, longitude: 78.486971, timestamp: "2024-07-20T10:00:25Z" },
    { latitude: 17.385404, longitude: 78.487031, timestamp: "2024-07-20T10:00:30Z" },
    { latitude: 17.385464, longitude: 78.487091, timestamp: "2024-07-20T10:00:35Z" },
    { latitude: 17.385524, longitude: 78.487151, timestamp: "2024-07-20T10:00:40Z" },
    { latitude: 17.385584, longitude: 78.487211, timestamp: "2024-07-20T10:00:45Z" },
];

// Simulate progressive movement by sending one new point at a time
let index = 0;

app.get('/api/vehicle', (req, res) => {
    const newData = vehicleData.slice(0, index + 1); // Send data up to the current index
    index = (index + 1) % vehicleData.length; // Increment index, loop when reaching the end
    console.log('Data served:', newData);
    res.json(newData);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
