import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { setPlayer1 } from '../redux/slice/player1';
import { useDispatch } from 'react-redux';
import { SelectPlayer1 } from '../redux/slice/player1';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Player2({user}) {

  const location = useLocation();
  const player2val = useRef(null)
  const dispatch = useDispatch();
  const message1 = useSelector(SelectPlayer1)

 

  const Send2redux = () => {
    const value = player2val.current.value
    dispatch(setPlayer1({text:value, user:location.pathname === '/' ? 'player1':'player2'}))
    player2val.current.value = ""
  }
  return (
    <div className="bg-stone-700">
      <div className="w-[1200px] bg-cyan-900 h-[90.5vh] my-0 mx-auto rounded-2xl flex flex-col pt-6 justify-between">
        <div className="flex flex-col gap-4">
          {message1.map((msg) => {
            return <div className={`flex w-full ${msg.user === user ? 'justify-end' : 'justify-start'} items-center`}><p className="bg-stone-800 text-white p-4 text-xl rounded-xl border-box ml-4 mr-4 mx-2">{msg.text}</p></div>
          })}   
           </div>
        <div className="flex">
          <input type="text" ref={player2val} className="text-white bg-cyan-900 p-2 py-4 outline-none rounded-xl text-2xl  w-[95%] border-2 border-stone-800" placeholder="Message.." />
          <Button variant="contained" onClick={Send2redux}>Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Player2