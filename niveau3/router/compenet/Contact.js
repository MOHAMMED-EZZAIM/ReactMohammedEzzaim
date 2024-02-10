import React, { Component } from 'react'
import "../routerMohammed.css"
export class  Contact extends Component {
    gotoFunct1=()=>{
        this.props.history.push("/About")
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
    render(){
    return <div>
             Welcom Contact 
             <div className='btns'>
             <button onClick={this.gotoFunct1}>About</button>
            <button onClick={this.gotoFunct2}>Details</button>
            <button onClick={this.gotoFunct3}>Home</button>
            <button onClick={this.gotoFunct4}>profile</button>
             </div>
          </div>
 }
}

export default Contact
