// Create var express that holds express framework
const express = require('express');
const app = express();
const cors = require('cors');
const mongoDBConn = require('./db');
const port = 3000;

mongoDBConn(); // Call function to connect to db
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('You are connected to the server today!');
});

app.listen(port, () => {
  console.log(`The server has started on http://localhost:${port}.`);
});
