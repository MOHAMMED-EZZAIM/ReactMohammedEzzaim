import React from 'react'

function Childcoment(props) {
  return (
    <div>
      <button onClick={()=>props.greetHanderler}>GrideParent</button>
    </div>
  )
}

export default Childcoment
