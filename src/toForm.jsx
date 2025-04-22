import React from 'react'
import { useState } from 'react';

const ToForm = ({onAddTodo}) => {
const[addData,setAddData] = useState('');

const handleData =(value)=>{
    setAddData(value);
}

const handleEvent =(event)=>{
    event.preventDefault();
    onAddTodo(addData);
    setAddData("");
}
  return (
    <>
      <form onSubmit={handleEvent}>
            <ul>
                <input className='input-part' type ="text" 
                 autoComplete='off'
                 value ={addData} 
                 onChange={(event)=>handleData(event.target.value)}>
                </input>
                <button  className="submit btn" type ="submit" >Add Task</button>
            </ul>
        </form>
    </>
  )
}

export default ToForm
