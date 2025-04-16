import { useState } from 'react';
import React from 'react'
import './list.css';
import { IoAdd } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";

const List = () => {
    const [inputValue,setInputValue]=useState(" ");
    const[setData,setNewData]=useState([]);
    


    const handleInputChange=(value)=>{
      setInputValue(value);
    };

  const handleRefresh=(event)=>{
    event.preventDefault();

    if(!inputValue) return;

    if(setData.includes(inputValue)) {
      setInputValue("")
     return;
    }

    setNewData((prevdata)=> [...prevdata,inputValue])

    setInputValue("")
  };




   
  return (
    <section className='container'>
        <header>
        <h1>Todo-List</h1>
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
              setData.map((curElem,index)=>{
                return(
                  <li key={index}>
                     <span> {curElem}</span>
                     <button className='add-btn'>
                     <IoAdd />
                     </button>
                     <button className='delete-btn'>
                     <MdAutoDelete />

                     </button>
                  </li>
                )
              })
            }
           </ul>
        </section>
    </section>
  )
}

export default List;