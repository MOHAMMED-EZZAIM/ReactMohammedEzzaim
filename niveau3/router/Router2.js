import React from 'react'
import Home from './compenet/Home.js'
import About from './compenet/About.js';
import { BrowserRouter ,Link ,Route, Switch} from 'react-router-dom/cjs/react-router-dom.min.js';
import Contact from './compenet/Contact.js';
import Details from './compenet/Details.js';

import"./routerMohammed.css"
import Profile from './compenet/profile.js';
function RoutPremier1(){
    return( 
      <BrowserRouter>
       <Link className="Classlink" to="/details">details</Link>
      <Link className="Classlink" to="/Home">Home</Link>  
      <Link className="Classlink" to="/about">About</Link>
      <Link className="Classlink" to="/Contact">Contact</Link>
      <Link className="Classlink" to="/Profile">Profile</Link>
      
      <Switch>
      <Route path="/Home"  exact component={Home}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Contact" exact component={Contact}/>
      {/* <Route path="/details/:name/:facult/:id" exact component={Details}/> */}
      <Route path="/details/Profile" exact component={Profile}/>
      <Route path="/details/:name" exact component={Details}/>
      </Switch>
      </BrowserRouter>
    );
}
export default RoutPremier1
