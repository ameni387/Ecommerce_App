import React from 'react'
import {Spinner} from "react-bootstrap"
function Loading() {
  return (
    <div className='loading-container'
    style={{ninHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Spinner animation='grow'/>
    </div>
  )
}

export default Loading
