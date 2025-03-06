import { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="أدخل مهمة جديدة"
      />
      <button type="submit">إضافة</button>
    </form>
  );
};

export default AddTodoForm;
