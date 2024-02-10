import React, { Component } from 'react'
import "../routerMohammed.css"
export class Profile extends Component {
    gotoFunct1=()=>{
        this.props.history.push("/Contact")
    }
    gotoFunct2=()=>{
        this.props.history.push("/details/mohammed ezzaim")
    }
    gotoFunct3=()=>{
        this.props.history.push("/About")
    }
    gotoFunct4=()=>{
        this.props.history.push("/Home")
    }
  render() {
    return (
      <div className='profile'>
       <h1> Welcom from profile</h1>
        <button onClick={this.gotoFunct1}>Contact</button>
        <button onClick={this.gotoFunct2}>details</button>
        <button onClick={this.gotoFunct3}>About</button>
        <button onClick={this.gotoFunct4}>Home</button>
      </div>
    )
  }
}
export default Profile
