import React from 'react'
import "../routerMohammed.css"
function Details(props) {
    const gotoFunct1=()=>{
        props.history.push("/Contact")
    }
    const gotoFunct2=()=>{
        props.history.push("/About")
    }

    const gotoFunct3=()=>{
        props.history.push("/Home")
    }
    const gotoFunct4=()=>{
        props.history.push("/details/Profile")
    }
    console.log(props)
  return (
    <div className='Details'>   
      <h1>Welcom from  dtails</h1>
      <h1>Name:{props.match.params.name}</h1>
        <button onClick={gotoFunct1}>Contact</button>
        <button onClick={gotoFunct2}>About</button>
        <button onClick={gotoFunct3}>Home</button>
        <button onClick={gotoFunct4}>profile</button>
      <h1>Facult:{props.match.params.facult}</h1>
      <h1>Numero:{props.match.params.id}</h1>
    </div>
  )
}

export default Details
