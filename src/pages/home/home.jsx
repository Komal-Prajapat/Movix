import React, { useEffect, useState } from 'react';
import './home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fbeff8af1c622fdf582364494c266f5e')
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: 'none', color: 'white' }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                  alt={movie.original_title}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title  poster_items">{movie ? movie.original_title : ''}</div>
                <div className="posterImage_runtime poster_items">
                  {movie ? movie.release_date : ' '}
                  <span className="posterImage__rating poster_items">
                    {movie ? movie.vote_average : ''}
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="posterImage__description poster_items">{movie ? movie.overview : ''}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="movielist">
        <MovieList></MovieList>
        </div>
      </div>
    </>
  );
};

export default Home;
