import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

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
    // منطق التوصية (مثال عشوائي)
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // ✅ تحديث قائمة الوصفات
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
