import React from 'react'
import Home from './Components/Home.js'
import History from './Components/History.js'
import Navbar from './Components/Navbar.js';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/history' element={<History />} />
      </Routes>
    </div>
  )
}

export default App