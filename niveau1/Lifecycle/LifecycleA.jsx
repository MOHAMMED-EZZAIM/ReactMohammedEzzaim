import React, { Component } from 'react'
import LifecycleB from './LifecycleB.jsx';
 class LifecycleA extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:"mohammed ",
      }
      console.log("LifecycleA constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA componentDidCatch");
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate");
      }
      componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");
      }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA render</div>
      <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
