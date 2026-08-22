import React from 'react'
import './Local.css'
import home from './home1.png'

function Local() {
  return (
    <div className='cal'>
      <div className="cal1">
        <img src={home} alt="" />
      </div>
      <div className="cal1">
        <h1>Thank You for supporting our <br />
             local community</h1>
      </div>
    </div>
  )
}

export default Local;
