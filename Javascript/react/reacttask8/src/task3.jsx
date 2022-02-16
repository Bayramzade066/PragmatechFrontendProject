import React, { useState, useRef, useEffect } from 'react'
import "./task3.css";

function App() {

    const [info, setinfo] = useState("")
    const [vaccine, setvaccine] = useState("")

    const [percentage, setpercentage] = useState("")



    const inputval = inputvalue.current.value

    fetch("https://covid-api.mmediagroup.fr/v1/cases")
        .then(response => response.json())
        .then(data => {
            setinfo(data[inputval].All)

        });
    fetch(" https://covid-api.mmediagroup.fr/v1/vaccines")
        .then(response => response.json())
        .then(data => {
            setvaccine(data[inputval].All)

        });




  return (
    <div className="task3">

    </div>
  )
}

export default App