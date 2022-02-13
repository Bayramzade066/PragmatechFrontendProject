import React from 'react';
import {FaTwitter, FaFacebookF, FaDribbble, FaInstagram} from 'react-icons/fa'
import './Footer.css'


function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="socials">
          <FaTwitter/>
          <FaFacebookF/>
          <FaDribbble/>
          <FaInstagram/>
        </div>
        <div className="texts">
        <p>2022 © Design by Unvab. Code by nK</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer