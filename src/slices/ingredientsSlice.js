import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchedIngredients: [],
};

const ingredientsSlice = createSlice({name : 'ingredients', 
    initialState, 
    reducers: {
        setSearchedIngredients: (state, action) => {
            state.searchedIngredients = action.payload;
        },
        clearSearchedIngredients: (state) => {
            state.searchedIngredients = [];
        }
    }
});

export const { setSearchedIngredients, clearSearchedIngredients } = ingredientsSlice.actions;
export const selectSearchedIngredients = (state) => { console.log(state); return state.searchedIngredients.searchedIngredients};
export default ingredientsSlice.reducer;

