import React from 'react';
import { Link ,NavLink } from 'react-router-dom';

const Navbar = () => {
  return <div className="h-[100px] bg-teal-600 flex justify-center items-center space-x-3">
  <Link to="/Home">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Team">Team</Link>
</div>
}

export default Navbar;
