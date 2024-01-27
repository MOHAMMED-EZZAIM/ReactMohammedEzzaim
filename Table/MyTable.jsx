import React from 'react'
import MyHeader from './MyHeader.jsx'
import MyBody from './MyBody.jsx'
import Myfooter from './Myfooter.jsx'
function MyTable() {
  return (
    <div>
      <table border={3}>
        <MyHeader/>
        <MyBody/>
        <Myfooter/>
      </table>
    </div>
  )
}

export default MyTable
