import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import '../src/Style/App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Work from './Component/Work/Work';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Work" element={<Work/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
