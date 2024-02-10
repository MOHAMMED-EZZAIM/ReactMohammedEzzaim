import React,{Component} from "react";

class Test extends React.Component{
state={
    personne:[
        {name:"mohammed",prenom:"ezzaim",age:20}, 
        {name:"mareyame",prenom:"ezzaim",age:20}, 
        {name:"houda",prenom:"ezzaim",age:20}, 
        {name:"lina",prenom:"ezzar",age:20}, 
        {name:"latifa",prenom:"ezzregiwiaim",age:20}, 
      ]
}
    // render(){
    //     const persone=this.state.personne.map(itme=>{
    //         return <ul>
    //             <li>{itme.name}</li>
    //             <li>{itme.prenom}</li>
    //             <li>{itme.age}</li>
    //         </ul>
    //     })
    //     return persone
    // }
    render(){ 
            return <ul>
             {this.state.personne.map((itme,index)=><li key={index}>{index} {itme.name}</li>)}
            </ul>
    }
}
    export default Test
     
