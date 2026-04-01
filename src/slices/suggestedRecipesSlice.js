import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    suggestedRecipes: [],
};

const suggestedRecipesSlice = createSlice({name : 'suggestedRecipes', 
    initialState, 
    reducers: {
        setSuggestedRecipes: (state, action) => {
            state.suggestedRecipes = action.payload;
        }  
    }
});

export const { setSuggestedRecipes } = suggestedRecipesSlice.actions;
export const selectSuggestedRecipes = (state) => state.suggestedRecipes.suggestedRecipes;

export default suggestedRecipesSlice.reducer;