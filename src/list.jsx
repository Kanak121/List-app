import { useEffect, useState } from 'react';
import React from 'react'
import './list.css';

import { MdAutoDelete } from "react-icons/md";

const todoForm = "reactform";

const List = () => {
    const [inputValue,setInputValue]=useState("");
    const[data,setData]=useState(() => {
      const Kanak = localStorage.getItem(todoForm);
      if(!Kanak) return [];
      
      return JSON.parse(Kanak)

    });
    

    const handleInputChange=(value)=>{
      setInputValue(value)

      ;
    };


  const[setTime,setDataTime] = useState();

  const handleRefresh=(event)=>{
    event.preventDefault();
 

    if(!inputValue) return;

    if(data.includes(inputValue)) {
      setInputValue("")
     return;
    }

    setData((prevdata)=> [...prevdata,inputValue])
    setInputValue("")
  };



  useEffect(()=>{
    const interval =setInterval(()=>{
    const now = new Date();
    const formatDate = now.toLocaleDateString();
    const formatTime = now.toLocaleTimeString();
     setDataTime(`${formatDate}-${formatTime}`)
    },1000);

    return()=> clearInterval(interval)
  },[]);

  const deleteItem=(kanak)=>{
    console.log(setData)
    console.log(kanak)
    const updatedData = data.filter((curElem)=> curElem !==kanak);
    setData(updatedData);
    
  }

const clearEverything=()=>{
  setData([]);
}

localStorage.setItem("reactform",JSON.stringify(data));
   

  return (
    <section className='container'>
        <header>
        <h1>Form</h1>
        <h2>{setTime}</h2>
        </header>
        <section className='form'>
        <form onSubmit={handleRefresh} >
            <div>
        <input 
        type = "text"
        className='todo-input'
        autoComplete='off'
        value = {inputValue}
        onChange={(event)=>handleInputChange(event.target.value)}
         />
        <button type ="submit" className='todo-btn'>Add Task</button>
        </div>
        </form>
        
        </section>
        <section className='unorder-list'>
           <ul>
            {
              data.map((curElem,index)=>{
                return(
                  <li key={index}>
                     <span> {curElem}</span>
                    
                     <button className='delete-btn' onClick={()=>deleteItem(curElem)}>
                     <MdAutoDelete />

                     </button>
                  </li>
                 
                )
              })
            }
           </ul>
           <button className='clear-btn' onClick={clearEverything} >Clear All</button>
        </section>
    </section>
  )
}

export default List;