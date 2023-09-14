const fetch = require('node-fetch');
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


const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVjNDUwNzU1MjMwODg3YmI4NjI3NmJmOGQwOTAzNiIsInN1YiI6IjY1MDJmOTkxZDdkY2QyMDBhY2IxOWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuSWoZj4ZTo0azmV4GwBonu1nO-6Q7Q6BAZrYbKaPaM'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
