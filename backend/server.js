// setting up the basic server
const express = require('express');
const app = express();

// Importing the connectDB from the config folder
const connectDB = require('./Config/database');

// For the .env file
require('dotenv').config();

// Mongo connection
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use(require('./routes/auth'));

const PORT = process.env.PORT || 5001;

// Listening port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
