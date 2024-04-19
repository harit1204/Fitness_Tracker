const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Function to generate random blood pressure data
function generateBloodPressureData() {
  const systolic = Math.floor(Math.random() * (180 - 90 + 1)) + 90;
  const diastolic = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
  return { systolic, diastolic };
}

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('Client connected');
  // Send mock blood pressure data every second
  const interval = setInterval(() => {
    const bloodPressureData = generateBloodPressureData();
    const timestamp = new Date().toISOString();
    const formattedData = { timestamp, value: bloodPressureData };
    ws.send(JSON.stringify(formattedData));
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Mock server is running on http://localhost:${PORT}`);
});
