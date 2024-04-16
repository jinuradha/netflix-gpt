import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popular: null,
        topRated: null,
        upcoming: null,
        movie: {},
        trailerKey: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popular = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcoming = action.payload;
        },
        getMovie: (state, action) => {
            state.movie = action.payload;
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addTrailerKey, addPopularMovies, addTopRatedMovies, addUpcomingMovies, getMovie } = moviesSlice.actions;

export default moviesSlice.reducer;