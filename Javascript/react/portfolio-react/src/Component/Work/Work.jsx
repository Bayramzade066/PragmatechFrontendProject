import {React,useState} from 'react'
import {MdUnfoldMore} from 'react-icons/md'
import './Work.css'
import Workbox from './Workbox'




function Work() {

  const [workdata, setWorkdata] = useState(
    [
      {
        id:Math.random()*1000,
        name:"Minimal Bag",
        class:"BRANDING",
        photo:"portfolio-5-sm",
      },
      {
        id:Math.random()*1000,
        name:"Modern T-Shirt",
        class:"PRINT",
        photo:"portfolio-4-sm",
      },       
      {
        id:Math.random()*1000,
        name:"Heja Stockholm",
        class:"PHOTOGRAPHY",
        photo:"portfolio-6-sm",
      },
      
      {
        id:Math.random()*1000,
        name:"Business Card",
        class:"BRANDING",
        photo:"portfolio-2-sm",
      },
      {
        id:Math.random()*1000,
        name:"Vinyl Record",
        class:"MOCKUP",
        photo:"portfolio-7-sm",
      },
      {
        id:Math.random()*1000,
        name:"Clean & Groovy",
        class:"DESIGN",
        photo:"portfolio-9-sm",
      },
    ]
  )



  return (
    <div className="work">
      <div className="__header">
        <div className="__icon">
          <MdUnfoldMore/>
        </div>
      </div>
      <div className="__main">
        {workdata.map((item) =>{
         return <Workbox key={item.id} item={item} />
        })}
      </div>
      <div className="__info"><p>LOAD MORE WORKS</p></div>
    </div>
  )
}

export default Work