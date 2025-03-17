import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📜 قائمة الوصفات</h1>

      {/* استدعاء نموذج الإضافة */}
      <AddRecipeForm onAddRecipe={addRecipe} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md hover:opacity-90 transition-opacity" />
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.ingredients.join(", ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
