import React, { useState, useContext, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { MyContext } from "../App";
import 'swiper/css';
import axios from 'axios'

export const header = {
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
  }

function  Bslider() {

    const [category, setcategory] = useState([])
    const ctx = useContext(MyContext)
useEffect(() => {
    (
        async()=>{
            const arr = []
                for(element of ctx.listdata){
                    const response = await axios.get(`https://api.themoviedb.org/4/list/${element.id}`,
                    {
                        headers:{
                    "Content-Type": "application/json;charset=utf-8",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
                    }})
                    arr.push(response.data)
                }
                setcategory(arr)
            
        }
    )()
  
  
},[ctx.listdata])

    
    


    
    
    // const GetList = (id) =>
    // axios.get("https://api.themoviedb.org/4/list/" + id, {
    //   headers: header
    // })
     

  return <>



    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="img">
            <img src="" alt="" />
          </div>
          <div className="text">

          </div>
          
          </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  
  </>
}

export default Bslider