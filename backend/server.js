// setting up the basic server
const express = require('express');
const app = express();

//importing the connectDB from the config folder
const connectDB = require('./Config/database');

// for the .env file
require('dotenv').config();
const PORTS = process.env.PORT || 3000

// mongo connection
connectDB();

//listening port
app.listen(PORTS , () => {
    console.log(`Port successfully running at ${PORTS}`)
})