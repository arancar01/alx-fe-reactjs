import { useRecipeStore } from '../store/recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);
  
  const isFavorite = favorites.includes(recipeId);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}>
        {isFavorite ? '💔 إزالة من المفضلة' : '❤️ أضف إلى المفضلة'}
      </button>
    </div>
  );
};

export default RecipeDetails;
