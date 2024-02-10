import React, { Component } from 'react'

export class Radion extends Component {
    functionDao=(e)=>{
        console.log(e.target.value);
    }
  render() {
    return (
      <div> 
        Femal<input type='radio' name='sex' value={"female"} onChange={this.functionDao}/>
        Male<input type='radio' name='sex' value={"Male"} onChange={this.functionDao}/>
      </div>
    )
  }
}

export default Radion
