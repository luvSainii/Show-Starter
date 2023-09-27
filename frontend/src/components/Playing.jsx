import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 20 // Adjust the spacing here
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 20 // Adjust the spacing here
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 10 // Adjust the spacing here
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 5 // Adjust the spacing here
  }
};

function Popular() {
    const [data, setData] = useState([]);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVjNDUwNzU1MjMwODg3YmI4NjI3NmJmOGQwOTAzNiIsInN1YiI6IjY1MDJmOTkxZDdkY2QyMDBhY2IxOWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuSWoZj4ZTo0azmV4GwBonu1nO-6Q7Q6BAZrYbKaPaM'
      }
    };
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
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
    }, []); // Empty dependency array to run the effect only once

    return (
      <>
      <h2 className=" mt-5" style={{marginLeft:"3.5rem"}}>Now Playing</h2>
        <Carousel responsive={responsive} containerClass="custom-carousel"
        arrows={false}>
                    {data.map((element) => (
                        <div className="card mt-4 carousel-card" style={{ height:"30rem",width: "17rem",marginLeft:"3.5rem"}}>
  <img
    src={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`}
    className="card-img-top" style={{height:"22rem"}}
    alt={element.original_title}
  />
  <div className="card-body">
    <h5 className="card-title text-secondary">{element.original_title}</h5>
    <p className="card-text">Release Date :{element.release_date}</p>
    <p className="card-text">Rating :{element.vote_average}</p>
  </div>
</div>
                    ))}
        </Carousel>
        </>
    );
}

export default Popular;

