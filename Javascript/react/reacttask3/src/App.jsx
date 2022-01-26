
// nav bar with Router

import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import {Routes,Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'





function App() {
  return( <div>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Team" element={<Team/>} />
    </Routes>
    </div>
    
  </div>
  )

}

export default App;
