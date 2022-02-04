import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';

function Home() {
  return <div className='container'>
    <Navbar/>
    <Carousel/>
  </div>;
}

export default Home;
