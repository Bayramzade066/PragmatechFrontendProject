import React from 'react'
import netflix from './img/download.png'
import Bslider from "../Bslider/Bslider"
import {BrowserRouter as Link} from 'react-router-dom'
function Main() {



  return (
    <div className="w-full bg-[#141414] h-[100vh]">
        <div className="w-[1200px] my-0 mx-auto  h-[100vh] ">
            {/* navbar */}
            <div className="w-full px-16 h-[68px]  flex justify-between text-center items-center">
                <div className="w-[93px]">
                    <img src={netflix} alt="netlix" />
                </div>
                <div className="text-[#b81d24] font-[700] text-[14.5px] px-4 cursor-pointer transition-all hover:text-[#e81e25] hover:transition-all ">
                    <Link to='/' >Register</Link>
                    
                </div>

            </div>
            {/* main slider */}
            <div className="">
                <Bslider/>
            </div>

        </div>
    </div>
  )
}

export default Main