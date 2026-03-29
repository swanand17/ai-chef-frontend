import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import ingredientsReducer from './slices/ingredientsSlice';

const store = configureStore({
  reducer: {
    currentRecipe: recipeReducer,
    searchedIngredients: ingredientsReducer,
  }
});

export default store;