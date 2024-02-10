import React, { Component } from 'react'


export class Checkbox extends Component {
constructor(props) {
  super(props)

  this.state = {
     sex:""
  }
}
ChangeTofemal=(e)=>{
  if(e.target.checked){
    console.log("baravo tu es   Femal ");
  }
       
    }
ChangeToMale=(e)=>{
  if(e.target.checked){
    console.log("baravo tu es   Male ");  
  }
      }
  render() {
    return (
      <div> 
        Femal<input type='checkbox' name='sex' value={"female"} onChange={this.ChangeTofemal}/>
        Male<input type='checkbox' name='sex' value={"Male"} onChange={this.ChangeToMale}/>
      </div>
    )
  }
}

export default Checkbox
