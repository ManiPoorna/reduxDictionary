import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import History from './Components/History.js';
import Navbar from './Components/Navbar.js';
 
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;