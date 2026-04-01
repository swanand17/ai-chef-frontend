import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import suggestedRecipesReducer from './slices/suggestedRecipesSlice';

const store = configureStore({
  reducer: {
    currentRecipe: recipeReducer,
    searchedIngredients: ingredientsReducer,
    suggestedRecipes: suggestedRecipesReducer,
  }
});

export default store;