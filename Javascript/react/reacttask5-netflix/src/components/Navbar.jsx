import React from 'react';
import '../App.css'
import download from "../download.png";

function Navbar() {
  return <div className='navbar'>
      <a href="#"><img src={download} alt="Netflix" /></a>
      <a href="#"><p className='navbar-p'>Register</p></a>
  </div>;
}

export default Navbar;
