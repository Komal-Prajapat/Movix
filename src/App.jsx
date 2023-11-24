import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
// import './App.css'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.css'
function App() {


  return (
    <div className='App'>
      <Router>
     <Header></Header>
        <Routes>
<Route index element=<Home></Home>></Route>
<Route path='movie/:id' element={<h1>Movie</h1>}> Movie </Route>
<Route path='movie/:type' element={<h1>Movies</h1>}> Movies </Route>
<Route path='/' element={<h1> Error Page </h1>}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
