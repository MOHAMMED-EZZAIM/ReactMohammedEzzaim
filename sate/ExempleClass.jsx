import React,{ Component } from "react"
class Welcom extends Component{
    constructor(){
        super();
        this.state={
            messages: 'Welcome visitor'
        }
    }
       ahhaichclicker=()=>{
        this.setState({messages:'thank your for visite'}); 
       }
    render(){     
 return(
    <div>
        <h1>{this.state.messages}</h1> 
        <button  onClick={this.ahhaichclicker}>Connecter</button>
    </div>
 );
    }
}

export default Welcom;