import {React,useState} from 'react'
import './Home.css'
import Homebox from './Homebox'
import {Link} from 'react-router-dom'


function Home() {

  const [homedata, setHomedata] = useState(
    [
      {
        id:Math.random()*1000,
        name:"Vinyl Record",
        class:"MOCKUP",
        photo:"portfolio-7-sm",
      },
      {
        id:Math.random()*1000,
        name:"Modern T-Shirt",
        class:"PRINT",
        photo:"portfolio-4-sm",
      },       
      {
        id:Math.random()*1000,
        name:"Minimal Bag",
        class:"BRANDING",
        photo:"portfolio-5-sm",
      },
      {
        id:Math.random()*1000,
        name:"Clean & Groovy",
        class:"DESIGN",
        photo:"portfolio-9-sm",
      },
      {
        id:Math.random()*1000,
        name:"Minimal Mobile App",
        class:"DESIGN",
        photo:"portfolio-3-sm",
      },
      {
        id:Math.random()*1000,
        name:"White T-Shirt",
        class:"PRINT",
        photo:"portfolio-8-sm",
      },
      {
        id:Math.random()*1000,
        name:"Business Card",
        class:"BRANDING",
        photo:"portfolio-2-sm",
      },
      {
        id:Math.random()*1000,
        name:"Heja Stockholm",
        class:"PHOTOGRAPHY",
        photo:"portfolio-6-sm",
      },
      {
        id:Math.random()*1000,
        name:"Paper Bag",
        class:"PHOTOGRAPHY",
        photo:"portfolio-12-sm",
      },
    ]
  )

  return (
    <div className="home">
      <div className="__header">
        <div className="__img"><img src={"/image/home-1.jpg"} alt="" /></div>
        <div className="__textall">
            <div className="__text">
            <h2>Digital. Modern. Creative</h2>
            <p>We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
              <Link to="/Work">WORK WITH US NOW
            <div className="line"></div>
            </Link>
            
            </div>
        </div>
      </div>
      <div className="__main">
        {homedata.map((item)=>{
         return <Homebox key={item.id} item={item} />
        })}
      </div>
      <div className="__info"><p>LOAD MORE WORKS</p></div>
      
    </div>
  )
}

export default Home