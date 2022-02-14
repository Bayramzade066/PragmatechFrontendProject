import React,{useEffect, useState} from 'react'
import './Navbar.css'
import { NavLink, useLocation} from 'react-router-dom';




function Navbar() {

  const Headerlocation = useLocation()

  const [headeranima, setHeaderanima] = useState(false)

  const  anima = ()=>{
    setHeaderanima(true)
    setTimeout(() => {
      setHeaderanima(false)
    }, 700);
  }

  useEffect(() => {
    anima()
    

  }, [Headerlocation.pathname])
  

  return (
    <header className={headeranima ? "headerActive" : ""}>
      <div className="navbar">
        <div className="logo">
          <img src={"/image/logo.svg"} alt="Logo" />
        </div>
        <div className="navlinks">
          <NavLink style={({ isActive }) => ({
                            color: isActive ? "#444" : '',

                        })} to="/">HOME</NavLink>
          <NavLink style={({ isActive }) => ({
                            color: isActive ? "#444" : '',

                        })} to="Work">WORK</NavLink>
          <NavLink style={({ isActive }) => ({
                            color: isActive ? "#444" : '',

                        })} to="About">ABOUT</NavLink>
          <NavLink style={({ isActive }) => ({
                            color: isActive ? "#444" : '',

                        })} to="Blog">BLOG</NavLink>
          <NavLink style={({ isActive }) => ({
                            color: isActive ? "#444" : '',

                        })} to="Contact">CONTACT</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar