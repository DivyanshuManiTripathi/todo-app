import './App.css'
import { useState } from 'react'
import ToDoInput from './components/ToDoInput';
import ToDoItem from './components/ToDoItem'
function App() {
  // useState to handle todos
  const [todos,setTodos]=useState([]);
 // function to add todos in the array
  const addToDo=(text)=>{
    if(text.trim()==="") return;
    const newTodo={
      id:Date.now(),
      text,
      completed:false,
    }
     setTodos([newTodo,...todos]);
  }
 // toggleTodo
 const toggleToDo=(id)=>{
    setTodos(todos.map(todo=>
      todo.id===id?{...todo,completed:!todo.completed}:todo
    ))
 }
 // delete todo
 const deleteToDo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!=id))
 }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
    <h1 className='text-yellow-600 mt-2.5 ml-2.5 font-semibold text-3xl'>To-Do-App</h1>
      <ToDoInput addToDo={addToDo} />

       <div className="w-full max-w-md mt-4">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No tasks yet</p>
        )}
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </div>
    </div>
  )
}

export default App
