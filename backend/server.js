// Create var express that holds express framework
const express = require('express');
const mongoDBConn = require('./db');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const port = 3000;

mongoDBConn(); // Call function to connect to db

// Middleware
app.use(express.json()); // Used to parse JSON body
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('You are connected to the server today!');
});

app.post('/registration', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`The server has started on http://localhost:${port}.`);
});
