import React from 'react';
import { useParams , Link} from 'react-router-dom';
import {data} from './App';

export default function User() {
 const {id} = useParams()
 const user = data.find(u => u.id===Number(id))
 return( <div className='w-full h-screen flex flex-col justify-center items-center'>
     <div className="flex flex-col items-left justify-center w-[400px]">
         <h1 className='text-5xl font-bold text-teal-600 mb-10 ml-20'>User Details</h1>
     <div className='flex flex-row items-left'>
         <span className='mb-7 mr-2 text-3xl text-teal-200 font-bold'>User - </span>
         <h1 className='outline-none mb-7 text-3xl transition-all-0.5s  text-white hover:text-emerald-700 transition-all-0.5s cursor-pointer'>{user.id}</h1>
     </div>
     <div className='flex flex-row'>
         <span className='mb-7 mr-2 text-3xl text-teal-200 font-bold'>My Name is : </span>
         <h1 className='outline-none mb-7 text-3xl transition-all-0.5s  text-white hover:text-emerald-700 transition-all-0.5s cursor-pointer'>{user.name}</h1>
      </div>
      <div className='flex flex-row'>
         <span className='mb-7 mr-2 text-3xl text-teal-200 font-bold'>My Number : </span>
         <h1 className='outline-none mb-7 text-3xl transition-all-0.5s  text-white hover:text-emerald-700 transition-all-0.5s cursor-pointer'>{user.phone}</h1>
      </div>
      <div className='flex flex-row'>
         <span className='mb-7 mr-2 text-3xl text-teal-200 font-bold'>My Email : </span>
         <h1 className='outline-none mb-7 text-3xl transition-all-0.5s  text-white hover:text-emerald-700 transition-all-0.5s cursor-pointer'>{user.email}</h1>
     </div>
     <div className='flex flex-row'>
         <span className='mb-7 mr-2 text-3xl text-teal-200 font-bold'>My Website : </span>
         <h1 className='outline-none mb-7 text-3xl transition-all-0.5s  text-white hover:text-emerald-700 transition-all-0.5s cursor-pointer'>{user.website}</h1>
     </div>
     <Link to={"/"}><button className='border-4 mt-10 ml-24 p-3  text-cyan-50 uppercase text-lg hover:bg-cyan-700 border-cyan-700 '>Go To User List</button></Link>
     </div>
     </div>)
   
   
  
 
 

  
}