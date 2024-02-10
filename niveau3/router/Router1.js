import React from 'react'
import Home from './compenet/Home.js'
import About from './compenet/About.js';
import { BrowserRouter ,Link ,Route} from 'react-router-dom/cjs/react-router-dom.min.js';
import Contact from './compenet/Contact.js';

function RoutPremier(){
    return( 
      <BrowserRouter>
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>

      <Route path="/Home"  exact component={Home}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Contact" exact component={Contact}/>
      </BrowserRouter>
    );
}
export default RoutPremier
