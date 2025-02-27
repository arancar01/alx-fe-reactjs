//import { create } from 'zustand';
//
//const useRecipeStore = create((set) => ({
//  recipes: [],
//
//  // إضافة وصفة جديدة
//  addRecipe: (newRecipe) => set((state) => ({
//    recipes: [...state.recipes, newRecipe]
//  })),
//
//  // تحديث وصفة موجودة
//  updateRecipe: (updatedRecipe) => set((state) => ({
//    recipes: state.recipes.map((recipe) =>
//      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//    )
//  })),
//
//  // حذف وصفة
//  deleteRecipe: (recipeId) => set((state) => ({
//    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
//  })),
//
//  // تعيين قائمة الوصفات (إضافة `setRecipes`)
//  setRecipes: (recipes) => set({ recipes }),
//}));
//
//export default useRecipeStore;
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',  // إضافة متغير لحفظ مصطلح البحث
  filteredRecipes: [],
  
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // إضافة دالة لتحديث البحث
  setSearchTerm: (term) => set({ searchTerm: term }),

  // فلترة الوصفات بناءً على مصطلح البحث
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // يمكن إضافة دوال أخرى مثل deleteRecipe و updateRecipe حسب الحاجة
}));

export { useRecipeStore };
