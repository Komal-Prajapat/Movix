import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
// import MovieDetails from './pages/movieDetails/MovieDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<h1>Movie</h1>} />
          <Route path="movies/:type" element={<MovieList />} />
                  <Route path="*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
