import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
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
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
