import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState()


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{
      return response.json()
    }).then(data=> setData(data))
  }, [])



  return (
    <div className="App">
        {data ? data.map(post => {  
            return <div key={post.id} className="box">
              <h1>{post.title}</h1>
              <h3>ID number : {post.id}</h3>
              <p>{post.body}</p>
              
              </div>
        }) : <div>Data is Loading...</div> }
    </div>
  );
}

export default App;
