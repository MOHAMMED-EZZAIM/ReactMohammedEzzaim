import React, { Component } from 'react'
import Childcoment from './Childcoment.jsx';
export class Parentcomponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         parentName:'Parent'
      }
    }
    greetParent=(child)=>
            // alert('hello'+this.state.parentName);
        alert(`hello ${this.state.parentName} from ${child}`);
    
  render() {
    return (
      <div>
       <Childcoment greetHanderler={()=>this.greetParent('mohammed ezzaim')}/>
      </div>
    )
  }
}

export default Parentcomponent
