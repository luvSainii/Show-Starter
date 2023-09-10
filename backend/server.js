// setting up the basic server

const express = require('express');
const app = express();

// for the .env file
require('dotenv').config();

const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log(`Port successfully running at ${PORT}`)
})