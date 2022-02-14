import React from 'react'
import './Blog.css'



function Blogbox({item}) {
  return (
    <div className="blogbox">
        <div className="__img"><img src={`image/${item.photo}.jpg`} alt="" />
        <div className="__text">
        <p>{item.date}</p>
        <h2>{item.text}</h2>
            <h3>READ MORE</h3>
            <div className="line"></div>

        </div>
    </div>
    </div>
  )
}

export default Blogbox