import React from 'react'
import {Image} from 'react-bootstrap'
import {useState,useEffect} from 'react'

const Summary = (key) => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVjNDUwNzU1MjMwODg3YmI4NjI3NmJmOGQwOTAzNiIsInN1YiI6IjY1MDJmOTkxZDdkY2QyMDBhY2IxOWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuSWoZj4ZTo0azmV4GwBonu1nO-6Q7Q6BAZrYbKaPaM'
    }
  };
  
  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${key}?api_key=3a5c450755230887bb86276bf8d09036`, options)
          .then((response) => response.json())
          .then((data) => {
              if (data.results) {
                  setData(data.results);
              } else {
                  console.error("No 'results' field in the API response:", data);
              }
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
          });
  }, []);
  console.log(data);
  return (
    <>
        <div>
          {data.map((element) => (
            <div key={element.id}>
              <Image src={element.poster_path} fluid />
            </div>
            ))}
        </div>
    </>
  )
}

export default Summary