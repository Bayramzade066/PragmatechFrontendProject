import React from 'react';
import Logo from '../Assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css';






function Navbar() {
    const [openLink, setopenLink] = useState(false);


    const clickNavbar = () => {

        setopenLink(!openLink)

    }


  return <div className='navbar'>
      <div className='leftSide' id={openLink ? 'open' : 'close'}>
            <img src={Logo} />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>  
            </div>
      </div>
      <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={clickNavbar}>
            <ReorderIcon/>
          </button>
      </div>
  </div>;
}

export default Navbar;
