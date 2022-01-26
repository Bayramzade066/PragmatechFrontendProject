import React from 'react';
import { useParams, useResolvedPath } from 'react-router-dom';
import {data} from './App';

export default function User() {
 const {id,name,surname,email} = useParams()
 return <div>
     <h1>{id}</h1>
     <h1>{name}</h1>
     <h1>{surname}</h1>
     <h1>{email}</h1>
 </div>
   
   
  
 
 

  
}