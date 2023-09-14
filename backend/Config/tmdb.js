const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/100?api_key=3a5c450755230887bb86276bf8d09036';
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