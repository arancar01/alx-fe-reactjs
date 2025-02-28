import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ إضافة وصفة جديدة
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { id: Date.now(), ...recipe }],
  })),

  // ✅ حذف وصفة
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),

  // ✅ تحديث وصفة
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // ✅ المفضلة (Favorites)
  favorites: [],
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // ✅ التوصيات (Recommendations)
  recommendations: [],
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // ✅ تحديث قائمة الوصفات
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
