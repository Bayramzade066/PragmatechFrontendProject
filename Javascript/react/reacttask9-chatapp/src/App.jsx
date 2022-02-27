import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Player1 from './components/Player1'
import Player2 from './components/Player2'
import Navbar from './components/Navbar'

function App() {

  
  return <> 
  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path="/"   element={<Player1 user='player1' />} />
      <Route path="/player2"  element={<Player2 user='player2' />} />
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App;
