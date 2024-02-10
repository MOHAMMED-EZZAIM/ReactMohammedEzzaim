import React, { Component } from 'react'
import "../routerMohammed.css"
export class About extends Component {
    gotoFunct1=()=>{
        this.props.history.push("/Contact")
    }
    gotoFunct2=()=>{
        this.props.history.push("/details/mohammed ezzaim")
    }

    gotoFunct3=()=>{
        this.props.history.push("/Home")
    }
    gotoFunct4=()=>{
        this.props.history.push("/details/Profile")
    }
    
  render() {
    console.log(this.props)
    return (
      <div className='About'>Welcom to
        About
        <button onClick={this.gotoFunct1}>Contact</button>
        <button onClick={this.gotoFunct2}>Details</button>
        <button onClick={this.gotoFunct3}>Home</button>
        <button onClick={this.gotoFunct4}>profile</button>
        
      </div>
    )
  }
}

export default About
