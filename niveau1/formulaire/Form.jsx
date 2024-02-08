import { useState } from "react";

function Form(){
    const [name,setName]=useState('');
    const [Age,setAge]=useState('');

       const HnadSubmit=(e)=>{
        setName(document.querySelector('#name').value);
        setAge(document.querySelector('#age').value);
        //  e.preventDefault pour que pages n'est pa changer rest dans le meme pages
        e.preventDefault();
        console.log(
            name,Age
        );
    }
    return(
        <div>
            <input type="text"  id="name" placeholder="Name"/>
            <input type="number" id="age" placeholder="Age" />
            <input type="submit" onClick={HnadSubmit}/>
        </div>
    );
    }
export default Form;