import React, { useEffect } from 'react'
import axios from'axios';

const Videos = () => {

    const options = {
        method: 'GET',
        url: 'https://imdb-search2.p.rapidapi.com/Pathaan',
        headers: {
          'X-RapidAPI-Key': '90681bfd94msh7c193d9e3e7f462p1cfb93jsn5433de736911',
          'X-RapidAPI-Host': 'imdb-search2.p.rapidapi.com'
        }
      };

async function fetchData(){
    try {
        const response = await axios.get(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

useEffect(()=>{
    fetchData();
},[])

  return (
    <div>Videos</div>
  )
}

export default Videos