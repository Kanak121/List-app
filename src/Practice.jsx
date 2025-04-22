import React, { useEffect } from 'react';
import { useState } from 'react';
import './practice.css';
import { IoIosAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import ToForm from './toForm';


const Practice = () => {
        
    const[data,setData]=useState([]);
    const[hour,setHour]=useState("")
    

    const handleEvent=(addData)=>{
        if(!addData) return;
        if(data.includes(addData)) {
            return;
            
        }
        setData((prev)=> [...prev,addData])
    }
   const clearEverything=()=>{
        setData([]);
   }

   const clearSelected =(value)=>{
        console.log(data)
       
        const newResult = data.filter((curElem)=> curElem !== value)
        setData(newResult);
         
   }
   useEffect(()=>{

    const interval = setInterval(()=>{
        const hey = new Date()
   const formatDate = hey.toLocaleDateString();
   const formatTime = hey.toLocaleTimeString();
   setHour(`${formatDate}-${formatTime}`)
     },1000)
     return ()=> clearInterval(interval)
    },[]);
   
  return (

    <section className='container'>
        <header>
        <h1>Todo List</h1>
      <h2>{hour}</h2>
        </header> 
        <ToForm onAddTodo ={handleEvent}/>
      
      <section className='two-container'>
        <ul>
            {
            data.map((curElem,index)=>{

                return(
                    <li key ={index}>
                        <span>{curElem}</span>

                        <button>
                        <IoIosAdd />
                        </button>
                        <button className="delete-btn"onClick ={()=>clearSelected(curElem)}>
                        <MdOutlineDelete/> </button>
                    </li>
                )

            })}
        </ul>
        <button className='end-btn' onClick={clearEverything}>Clear All</button>
      </section>
      </section>
      
  )
}

export default Practice
