// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from Node.js backend!');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Node.js server running at http://localhost:${PORT}`);
// });


const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();

// 🔥 Start Flask Server
const flaskProcess = spawn('python3', [path.join(__dirname, '../flask_backend/app.py')]);

flaskProcess.stdout.on('data', (data) => {
  console.log(`[FLASK]: ${data}`);
});

flaskProcess.stderr.on('data', (data) => {
  console.error(`[FLASK ERROR]: ${data}`);
});

flaskProcess.on('close', (code) => {
  console.log(`[FLASK] process exited with code ${code}`);
});

// 🚀 Node endpoint
app.get('/', (req, res) => {
  res.send('Node.js server is running, and Flask should be running too!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Node.js server running at http://localhost:${PORT}`);
});
