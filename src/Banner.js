import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Request';


function Banner() {

    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            console.log(request)
            return request
        }
        fetchData();
    }, [])


    console.log(movie)
    


    

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n -1) + '...': string;
    }

  return (
    <header 
    className ="banner" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
    }}
    >
    <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(`this is a test description
        this is a test description
        this is a test description
        this is a test description
        this is a test description
        this is a test description
        this is a test description
        this is a test description`,150)}</h1>           

    </div>

    <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner