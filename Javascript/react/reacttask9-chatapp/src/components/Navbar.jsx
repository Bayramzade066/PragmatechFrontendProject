import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {


  return (
    <div className="flex h-[60px] w-full items-center justify-center gap-6 bg-cyan-700">
        <div className="">
        
        <Link to="/" className="text-white text-2xl bg-black p-4 rounded-lg hover:bg-zinc-600 focus:bg-zinc-800">Player 1</Link>
        </div>
        <div className="">
     
        <Link to="/player2" className="text-white text-2xl bg-black p-4 rounded-lg hover:bg-zinc-600 focus:bg-zinc-800">Player 2</Link>
        </div>
    </div>
  )
}

export default Navbar