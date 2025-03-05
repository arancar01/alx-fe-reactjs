import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li 
      onClick={() => toggleTodo(todo.id)} 
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
      <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
