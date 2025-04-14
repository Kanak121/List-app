import React,{useState} from 'react'
import { IoIosSwitch } from "react-icons/io";
import './paint.css'
const Tswitch = () => {
    const[onClick,OnNowClick]=useState("false")

    const handleToogle=()=>{
      OnNowClick(!onClick);
    };

     const kanakOn = onClick ? "on":"off"
     const toClr = {backgroundColor : onClick ? "#4caf50":"red"}
    
  return (
    <>
    <h1> <IoIosSwitch style ={{color:"black"}} />Toggle switch  </h1>
    <div className='toggle-switch'
    style ={toClr}
     onClick={handleToogle}>
   <div className={`switch ${kanakOn}`}>
    <span
     className='switch-state'>{kanakOn}
    </span>

   
   </div>
   </div>
    </>
  )
}

export default Tswitch;
