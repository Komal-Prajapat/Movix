import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Card from './components/card/Card';
import MovieDetails from './pages/movieDetails/MovieDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<h1>movie</h1>} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/" element={<h1>Error Page</h1>} />
        </Routes>

        {/* <MovieDetails></MovieDetails> */}
        <MovieDetails></MovieDetails>
      </Router>
    </div>
  );
}

export default App;
