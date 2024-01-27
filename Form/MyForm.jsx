import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
       username:'',
       comments:'',
       tobic: 'RECT',
    }
  }
  ChanMethodes=(event)=>{
    this.setState(
      {
        username: event.target.value
      }
    );
  }
  Cahngtextearia=(event)=>{
    this.setState(
      {
        comments: event.target.value
      }
    );
  }
  changesSelect=(event)=>{
    this.setState(
      {
        tobic: event.target.value
      }
    );
  }
  

  HandeSumbit=(event)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.tobic}  `);
    event.preventDefault();
  }
  render() {
    return (
      <div>
      <form action="">
        <div>
        <label htmlFor="">UserName:</label>
        <input type="text" value={this.state.username} onChange={this.ChanMethodes}/> 
        <br />
        <label htmlFor="">comments:</label>
        <textarea name="" id="" cols="30" rows="0" value={this.state.comments} onChange={this.Cahngtextearia}></textarea>
        </div>
        <div>
          <select value={this.state.tobic} onChange={this.changesSelect}>
          <option value="">RECT</option>
            <option value="">HTML</option>
            <option value="">CSS</option>
            <option value="">JS</option>
           
          </select>
        </div><br/> <br />
        <input type="submit" onClick={this.HandeSumbit}/>
      </form>
    </div>
    )
  }
}

export default Form

