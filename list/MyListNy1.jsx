import React from 'react'
import './Mystyle.css';
function MyListNy1(props,key) {
  return(
    <div className='contente'>
    <h1>{props.nvname}, {props.nvid} ,{props.nvnote}</h1>
  </div>
  );
 
   
}

export default MyListNy1
