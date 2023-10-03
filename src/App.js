import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home.js';
import History from './Components/History.js';
import Navbar from './Components/Navbar.js';
 
const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/reduxDictionary' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Routes>
    </div>
  );
}
 
export default App;