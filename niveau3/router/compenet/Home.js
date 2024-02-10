import React, { Component } from 'react'
import "../routerMohammed.css"
  class Home extends Component {
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
        this.props.history.push("/details/Profile")
    }
  render() {
   
    return (
      <div className='home'>Welcom to
        Home page
        <button onClick={this.gotoFunct1}>Contact</button>
        <button onClick={this.gotoFunct2}>details</button>
        <button onClick={this.gotoFunct3}>About</button>
        <button onClick={this.gotoFunct4}>profile</button>
      </div>
    )
  }
}

export default Home
