import React, { useState } from "react";

const TodoList = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  // State to manage the input for adding a new todo
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (newTodo.trim() === "") return; // Ignore empty input

    // Create a new todo object
    const todo = {
      id: Date.now(), // Use a unique ID (timestamp)
      text: newTodo,
      completed: false,
    };

    // Update the todos state with the new todo
    setTodos([...todos, todo]);

    // Clear the input field
    setNewTodo("");
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Form to add a new todo */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Toggle completion status when clicking the todo text */}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            {/* Button to delete the todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;