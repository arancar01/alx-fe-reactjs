import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center text-xl mt-10">⏳ جاري تحميل البيانات...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        
        <h2 className="text-2xl font-semibold mt-4">المكونات:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">طريقة التحضير:</h2>
        <p className="text-lg text-gray-700 mt-2">{recipe.instructions}</p>

        <div className="mt-6 text-center">
          <a href="/" className="text-blue-500 hover:underline">🔙 العودة إلى القائمة الرئيسية</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
