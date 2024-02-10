import React, { Component } from 'react'
  
export class Ezzaim extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:""
      }
    }
    
    functionChange=(e)=> {
        this.setState({
            name:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type='text' onChange={this.functionChange}/>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default Ezzaim
