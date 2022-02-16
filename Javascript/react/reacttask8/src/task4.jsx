import React from 'react'

function App() {


    const inputval= useRef(null)
    const [datapaper, setdatapaper] = useState("")
    const [buttons, setbuttons] = useState([
      {
        id: 1,
  
      },
      {
        id: 2,
  
      },
      {
        id: 3,
  
      },
      {
        id: 4,
  
      },
      {
        id: 5,
  
      },
      {
        id: 6,
  
      },
      {
        id: 7,
  
      },
      {
        id: 8,
  
      },
      {
        id: 9,
  
      },
    ])

    const [selecteditem, setselecteditem] = useState(1)
    const [datafilter, setdatafilter] = useState("")
  
    useEffect(() => {
  
      fetch("https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=1")
        .then((response) => response.json())
        .then((data) => {
          setdatapaper(data.items)
        })
  
    }, [])
  

    useEffect(() => {
        fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${selecteditem}`)
          .then((response) => response.json())
          .then((data) => {
            setdatapaper(data.items)
          })
    
    
      }, [selecteditem])
    
    
      const changepaper = (e) => {
        setselecteditem(e.target.id)
    
      }
    
    
      const filterdata = (e) => {
          
          
        fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${datafilter}&format=json&page=${selecteditem}`)
          .then((response) => response.json())
          .then((data) => {
            setdatapaper(data.items)
            
          })
      }
      
      const catchdata=(e)=>{
            setdatafilter(e.target.value)
      }
    
    
    
    

  return (
    <div>App</div>
  )
}

export default App