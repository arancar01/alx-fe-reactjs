import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ تخزين الأخطاء

  // ✅ دالة التحقق من صحة الإدخال
  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "⚠️ يرجى إدخال عنوان الوصفة.";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "⚠️ يرجى إدخال المكونات.";
    } else if (ingredients.split("\n").length < 2) {
      validationErrors.ingredients = "⚠️ يجب أن تحتوي المكونات على عنصرين على الأقل.";
    }

    if (!steps.trim()) {
      validationErrors.steps = "⚠️ يرجى إدخال خطوات التحضير.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // ❌ إذا كانت هناك أخطاء، لا يتم إرسال النموذج
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      steps,
      image: "https://via.placeholder.com/300",
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({}); // ✅ إعادة تعيين الأخطاء بعد نجاح الإرسال
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">🍽️ إضافة وصفة جديدة</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="عنوان الوصفة"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <textarea
            placeholder="المكونات (كل مكون في سطر جديد)"
            value={ingredients}
            onChange={(e) => setIngredients(e
