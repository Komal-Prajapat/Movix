import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
// import './App.css'
import Header from './components/header/Header';
import Home from './pages/home/Home';
// import Card from './'
import './App.css'
import MovieList from './components/movieList/MovieList';
import Card from './components/card/Card';
function App() {


  return (
    <div className='App'>
      <Router>
        <Header></Header>
   
        <Routes>
<Route index element=<Home></Home>></Route>
<Route path='movie/:id' element={<h1>movie</h1>}></Route>
<Route path='movies/:type' element=<MovieList></MovieList>> Movies </Route>
<Route path='/' element={<h1> Error Page </h1>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App