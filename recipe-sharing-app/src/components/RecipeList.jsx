import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';  // استيراد Link من react-router-dom

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);  // استخدام الوصفات المفلترة

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>  {/* ربط الوصفة بتفاصيلها */}
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
