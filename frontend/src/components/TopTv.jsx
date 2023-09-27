import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function TopTv() {
    const [data, setData] = useState([]);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTVjNDUwNzU1MjMwODg3YmI4NjI3NmJmOGQwOTAzNiIsInN1YiI6IjY1MDJmOTkxZDdkY2QyMDBhY2IxOWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TuSWoZj4ZTo0azmV4GwBonu1nO-6Q7Q6BAZrYbKaPaM'
      }
    };
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
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
      <h2 className=" mt-5" style={{marginLeft:"8rem"}}>Top Rated</h2>
        <Carousel responsive={responsive}>
                    {data.map((element) => (
                        <div className="card mt-4" style={{ height:"20rem",width: "15rem",marginLeft:"8rem"}}>
  <img
    src={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`}
    className="card-img-top" style={{height:"12rem"}}
    alt={element.original_title}
  />
  <div className="card-body">
    <h5 className="card-title text-secondary">{element.name}</h5>
    <p className="card-text">Rating :{element.vote_average}</p>
  </div>
</div>
                    ))}
        </Carousel>
        </>
    );
}

export default TopTv;

