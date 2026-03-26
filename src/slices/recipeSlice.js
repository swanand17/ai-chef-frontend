import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipe: null,
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.recipe = action.payload;
    },

    clearRecipe: (state) => {
      state.recipe = null;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setRecipe,
  clearRecipe,
  setLoading,
  setError,
} = recipeSlice.actions;

export const selectRecipe = (state) => { console.log(state); return state.currentRecipe.recipe};
export const selectRecipeLoading = (state) => state.currentRecipe.loading;
export const selectRecipeError = (state) => state.currentRecipe.error;

export default recipeSlice.reducer;