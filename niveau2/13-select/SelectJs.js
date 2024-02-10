import React, { Component } from 'react'

export class SelectJs extends Component {
    FunChange(e){
        console.log(e.target.value);
    }
  render() {
    return (
      <div>
        <select onChange={this.FunChange} >
            <option value="" disabled>Country</option>
            <option value="Morrocco">Morrocco</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Algerie">Algerie</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
        </select>
      </div>
    )
  }
}

export default SelectJs
