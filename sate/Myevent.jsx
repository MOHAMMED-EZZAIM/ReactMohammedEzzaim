import { Component } from "react";

//  export default function Myevent(){
//   function diplayAlert(){
//     alert("this option is verry note importante");
//   }
//   return(
//   <div>
//     <h1>hello brother</h1>
//     <button onClick={diplayAlert}>Button1</button>
//     <button onMouseOut={diplayAlert}>Button2</button>
//     <button onMouseOver={diplayAlert}>Button3</button>
//   </div>
//   );
//  }

 export default class Myevent extends Component{
  // diplayAlert(){
  //   alert("this option is verry note importante");
  // }
  // render(){
  //   return(
  //     <div>
  //       <h1>hello brother</h1>
  //       <button onClick={this.diplayAlert}>Button1</button>
  //       <button onMouseOut={this.diplayAlert}>Button2</button>
  //       <button onMouseOver={this.diplayAlert}>Button3</button>
  //     </div>
  //     );
  // }
  names=["mohammed","latifa","mreyame","lina","houda"];
  nvname=this.names.map((name)=>
   <h4>{name}</h4>
  );
  render(){
    return(
        <div>
          {this.nvname}
        </div>   
          // this.names.map(name=>
          // <h4>{name}</h4>)
      );
  }
 }