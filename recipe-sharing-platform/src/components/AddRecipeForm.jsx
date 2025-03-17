import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("⚠️ يرجى ملء جميع الحقول!");
      return;
    }

    const newRecipe = {
      id: Date.now(), // إنشاء ID فريد
      title,
      ingredients: ingredients.split("\n"), // تقسيم المكونات كل سطر في مصفوفة
      instructions,
      image: "https://via.placeholder.com/300", // صورة افتراضية
    };

    onAddRecipe(newRecipe); // تمرير الوصفة إلى الدالة التي تضيفها
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">🍽️ إضافة وصفة جديدة</h2>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="عنوان الوصفة"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <textarea
          placeholder="المكونات (كل مكون في سطر جديد)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="خطوات التحضير"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="4"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          ➕ إضافة الوصفة
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
