import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Testing', completed: false },
  ]);

  const addTodo = (todoText) => {
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
