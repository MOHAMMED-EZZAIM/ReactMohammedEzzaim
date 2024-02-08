// import { Component } from "react"
import { useState } from 'react';
import style from './style.css';
// export default class Counter extends Component{
//     constructor(prpos){
//         super(prpos);
//         this.state={
//             count:0
//         }
//     }
//    increments=()=>{
//     this.setState(prevState=>{
//         return {count:prevState.count+1}})
//    }
//    decrement=()=>{
//     this.setState(prevState=>{
//         return {count:prevState.count-1}})
//    }
//    rest=()=>{
//     this.setState(prevState=>{
//         return {count:0}})
//    }
        
   
//     render(){
//         return (
//             <>
//                 <button onClick={this.increments}>increnent</button>
//                 <button onClick={this.decrement}>decrement</button>
//                 <button onClick={this.rest}>rest</button>
//                  <div className="secande"> Il y a {this.state.count} secandes</div>
//             </>
//         );
       
//     }
// }

export default function State({initilisationValue,setp}){
    const [count,setCount]=useState(initilisationValue);
    const AgmenteCount=()=>{
        setCount(getCount=>{
            return getCount+setp
           
        })
        console.log(count+1);
    }
    const DegmantCount=()=>{
        setCount(prevState=>{
            return prevState-setp
        },()=>{ console.log(count);})
       
    }
    const RestCount=()=>{
        setCount(prevState=>{
            return prevState=0
        })
    }
    return(
    <div>
        <button onClick={AgmenteCount}>Increment</button>
        <button onClick={DegmantCount}>Dcrements</button>
        <button onClick={RestCount}>Rest</button>
          <div className="secande"> Il y a {count} secandes</div>
    </div>
    );
}