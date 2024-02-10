import React, { Component } from 'react'
import"./mohammed.css";
export class File extends Component {
    state={
        className:'red',
        styles:{
            color:"red",
            fontSize:"50px",
            backgroundColor:"black"
        }
    }
    handale1=()=>{
       this.setState({
        className:'green'
       })
    }
    handale2=()=>{
        this.setState({
         className:'red'
        })
     }
     handale3=()=>{
        this.setState({
         className:'black'
        })
     }

  render() {
    return (
      <div className='App'>
        <h1 style={this.state.styles}>mohammed ezzaim</h1>
        <h1 className={this.state.className}>Welcom mohamed ezzaim</h1>
        <button onClick={this.handale1}>green</button>
        <button onClick={this.handale2}>red</button>
        <button onClick={this.handale3}>black</button>
      </div>
   )
  }
}
export default File
