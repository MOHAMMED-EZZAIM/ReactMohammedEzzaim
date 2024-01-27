import React from 'react'
import MyListNy1 from './MyListNy1.jsx';
function MyListNy() {
    const Myobjec=[ 
        {id:1,name: 'mohammed',note:20},
        {id:2,name:"mareyame",note:20},
        {id:3,name: 'latifa',note:20},
        {id:4,name:"houda",note:20}]
       
  //  const ncTab=Myobjec.map(
  //   (ob1)=><h2>i am {ob1.name} ane my id={ob1.id} note={ob1.note}</h2>
  //  ); 
const ncTab=Myobjec.map(
    (ob1)=> <MyListNy1 key={ob1.id} nvname={ob1.name} nvid={ob1.id} nvnote={ob1.note}/>
   ); 
  return (
    <div>
     {ncTab}
    </div>
  )
}

export default MyListNy
