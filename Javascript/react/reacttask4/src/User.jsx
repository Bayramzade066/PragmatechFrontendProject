import React from 'react';
import { useParams, useResolvedPath } from 'react-router-dom';
import {data} from './App';

export default function User() {
 const {id} = useParams()
 const user = data.find(u => u.id===Number(id))
 return( <div>
     <h1>{user.id}</h1>
     <h1>{user.name}</h1>
     <h1>{user.surname}</h1>
     <h1>{user.email}</h1>
 </div>)
   
   
  
 
 

  
}