import {React,useState} from 'react'
import Blogbox from './Blogbox'
import './Blog.css'


function Blog() {

  const [blogdata, setBlogdata] = useState(
    [
      {
        id:Math.random()*1000,
        date:"SEPTEMBER 18, 2018",
        text: "Something I need to tell you",
        photo:"post-1-s2",

      },
      {
        id:Math.random()*1000,
        date:"SEPTEMBER 5, 2018",
        text: "Here's a Simple Trick",
        photo:"post-2-s2",

      },
      {
        id:Math.random()*1000,
        date:"AUGUST 27, 2018",
        text: "The History of Nature",
        photo:"post-3-s2",

      },
      {
        id:Math.random()*1000,
        date:"AUGUST 14, 2018",
        text: "Are you doing the Right Way?",
        photo:"post-4-s2",

      },
      {
        id:Math.random()*1000,
        date:"AUGUST 14, 2018",
        text: "Ten things about Photography",
        photo:"post-5-s2",

      },
      {
        id:Math.random()*1000,
        date:"AUGUST 14, 2018",
        text: "Why you should Always First",
        photo:"post-6-s2",

      },
      {
        id:Math.random()*1000,
        date:"JUNE 21, 2018",
        text: "My Favorite Place on earth is...",
        photo:"post-9-s2",

      },
      {
        id:Math.random()*1000,
        date:"JULE 3, 2018",
        text: "Five things about Nature",
        photo:"post-7-s2",

      },
      {
        id:Math.random()*1000,
        date:"JUNE 26, 2018",
        text: "The History of Branding",
        photo:"post-8-s2",

      },
    ]
  )

  return (
    <div className='blog'>
      <div className="__main">
        {blogdata.map((item) =>{
          return <Blogbox key={item.id} item={item} />
        })}``
      </div>
      <div className="__info"><p>LOAD MORE POSTS</p></div>
    </div>

  )
}

export default Blog