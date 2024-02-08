import React, { Component } from 'react'
 class LifecycleB extends Component {
    constructor(props) {
      super(props)

      this.state = {
         name:"mohammed ",
      }
      console.log("LifecycleB constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
      console.log("LifecycleB componentDidCatch");
  }
  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifecycleB getSnapshotBeforeUpdate");
  }
  componentDidUpdate(){
    console.log("LifecycleB componentDidUpdate");
  }
  ChangState=()=>{
    this.setState({
      name:"latifa"
    });
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
          <div>LifecycleB render</div>
          <button onClick={this.ChangState}>Chanfe state</button>
      </div>
      
    )
  }
}

// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleB constructor
// LifecycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB componentDidCatch
// LifecycleA componentDidCatch

export default LifecycleB
