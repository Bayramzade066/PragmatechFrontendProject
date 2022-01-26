import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Button(){
    
    const navigate =  useNavigate()
    return (
        <div>
            <button onClick={()=>{
                navigate({
                    pathname:"/"
                })
            }}>Go To Home page
            </button>

        </div>
    );
}

