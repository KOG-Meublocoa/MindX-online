import React, { useState } from 'react'
import './styles.css'

const LightBulb = () => {
    const [isOn,SetIsOn]= useState(false);
    const toggleSwitch = ()=>{
        SetIsOn(!isOn);
    }
  return (
    <div>
        <div>
            <span>Den:</span>
            <div 
            className="light-bulb"
            stle={{}}
            ></div>
            <button onClick ={toggleSwitch} >Chuyen trang thai </button>
        </div>
    </div>
  )
}

export default LightBulb