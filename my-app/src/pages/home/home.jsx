import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import typing 
const home = () => {

const [popularMovies,setpopularMovies]=useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=fbeff8af1c622fdf582364494c266f5e")
    .then(res =>res.json())
    .then(data=> setpopularMovies(data.results))
  },[])
  return (
    <>
    <div className="poster">
    <Carousel
     showThumbas={false}
    autoPlay={true}
    trasnsitionTime={3}
    infinteLoop={true}
    showStatus={false}>
             {
              popularMovies.map(movie=>(
                <Link style={{textDecoration="none" , color:"white"}} to={`/movie/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie&&movie.backdrop_path}`}></img>
                </div>
                <div className="poster_mage_overlay">
                    <div className="poster_Image__title"{movie?movie.original_title:""}>
                    <div className="posterImage_runtime">
                      {movie? movie.release_date :""}
                      <span className=''></span>
                    </div>

                    </div>
                </div>
                </Link>

              
              ))
             }

    </Carousel>
      </div>
     </>
  )
}

export default home
