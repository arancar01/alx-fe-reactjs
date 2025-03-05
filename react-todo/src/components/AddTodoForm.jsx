import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button data-testid="add-btn" type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
