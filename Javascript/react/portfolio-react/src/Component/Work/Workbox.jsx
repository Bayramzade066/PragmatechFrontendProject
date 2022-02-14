import React from 'react'
import './Work.css'
function Workbox({item}) {
  return (
    <div className="workbox">
        <div className="__img"><img src={`image/${item.photo}.jpg`} alt="" />
        <div className="__text">
        <h2>{item.name}</h2>
            <p>{item.class}</p>
        </div>
    </div>
    </div>
  )
}

export default Workbox