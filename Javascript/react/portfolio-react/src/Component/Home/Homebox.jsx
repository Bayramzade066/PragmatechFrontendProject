import React from 'react'
import './Home.css'
function Homebox({item}) {

    


  return (
    <div className="homebox">
        <div className="__img"><img src={`image/${item.photo}.jpg`} alt="" />
        <div className="__text">
            <h2>{item.name}</h2>
            <p>{item.class}</p>
        </div>
        </div>

    </div>
  )
}

export default Homebox