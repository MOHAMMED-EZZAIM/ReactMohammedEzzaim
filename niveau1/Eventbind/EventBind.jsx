import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super();
        this.state={
            message:'hello'
        }
    
    }
    ClickHandker(){
       this.setState({
        message:'GoddBy'
       })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ClickHandker.bind(this)}>click</button>
        <button onClick={()=>this.ClickHandker()}>click</button>
      </div>
    )
  }
}

export default EventBind

