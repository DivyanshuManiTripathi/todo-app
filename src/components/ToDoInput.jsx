import React from "react";
import { useState } from "react";
 const ToDoInput=({addToDo})=>{
    const [text,setText]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addToDo(text);
        setText('');
    }
    return (
        <form className="flex gap-2 w-full max-w-md" onSubmit={handleSubmit}
action="">
           <input type="text" value={text} placeholder="Enter Your Task" onChange={(e)=>setText(e.target.value)}
           className="flex-grow px-4 py-2 rounded-md border-gray-300"/>
           <button type="submit" className="bg-amber-700 text-white px-4 py-2 rounded-md  hover:bg-blue-700 transition"> Add Todo</button>
        </form>
    )
 }
 export default ToDoInput;