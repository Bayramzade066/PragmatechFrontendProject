import React from 'react'
import './About.css'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineClockCircle,AiOutlineStar,AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'


function About() {
  return (
    <div className="about">
      <div className="__img">
        <img src={"./image/about-me.jpg"} alt="Me" />
      </div>
      <div className="__textall">
        <div className="__left"><h2>I create <span>everything</span> digital, <br /> printable & minimal.</h2></div>
        <div className="__right">
          <p>Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et lobortis quam, in ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat hendrerit sed. Sed metus urna, bibendum id tortor , feugiat pharetra ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.</p>
          <p>Curabitur tristique, felis ut mattis auctor, elit ante laoreet libero, ac sceleris lorem quam vitae libero. Suspendisse aliquet eget risus quis vehicula.</p>
          <div className="__signature"><img src={"./image/about-me-signature.png"} alt="" /></div>
        </div>
      </div>
      <div className="__skills">
      <div className="__skill">

        <div className="__box">
        <div className="__icon"><MdWorkOutline/></div>
        <h1>548 <br /> <p>PROJECTS COMPLETED</p> </h1>
      
        </div>

        <div className="__box">
        <div className="__icon"><AiOutlineClockCircle/></div>
        <h1>1465 <br />  <p>WORKING HOURS</p> </h1>
        
        </div>

        <div className="__box">
        <div className="__icon"><AiOutlineStar/></div>
        <h1>612 <br />  <p>POSITIVE FEEDBACKS </p>  </h1>
       
        </div>

        <div className="__box">
        <div className="__icon"><AiOutlineHeart/></div>
        <h1>735  <br /><p>HAPPY CLIENTS</p></h1>
        </div>

      </div>
      </div>
      <div className="__contactme">
        <h1>Let's work together</h1>
        <p>Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam aliquet, faucibus, nisi eros vehicula lorem.</p>
        <Link to="/Contact"><button type="button" className="__btn">CONTACT ME</button></Link>
      </div>
    </div>
  )
}

export default About