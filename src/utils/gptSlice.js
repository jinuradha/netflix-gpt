import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchPage: false,
    gptResults: null,
    filteredMovies: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchPage = !state.gptSearchPage;
    },
    getGptMovies: (state, action) => {
      state.gptResults = action.payload;
      
    },
    getFilteredMovies: (state, action) => {
      state.filteredMovies = action.payload;
    }
   },
});

export const { toggleGptSearch, getGptMovies, getFilteredMovies } = gptSlice.actions;

export default gptSlice.reducer;
