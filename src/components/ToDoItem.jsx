import React from "react";

const ToDoItem = ({ todo, toggleToDo, deleteToDo }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white rounded-md shadow-sm mt-2">
      <span
        onClick={() => toggleToDo(todo.id)}
        className={`cursor-pointer flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteToDo(todo.id)}
        className="text-red-500 hover:text-red-700 transition ml-4"
      >
        ❌
      </button>
    </div>
  );
};

export default ToDoItem;
