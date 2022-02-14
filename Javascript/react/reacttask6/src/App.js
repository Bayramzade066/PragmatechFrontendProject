import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as  Router, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
   <Navbar/>
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/menu" exact component={Menu} />
     <Route path="/about" exact component={About} />
     <Route path="/contact" exact component={Contact} />
     </Switch>
   </Router>
   <Footer/>
    </div>
  );
}

export default App;
