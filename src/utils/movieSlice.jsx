import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerUrl: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerUrl: (state, action) => {
      state.trailerUrl = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerUrl, addPopularMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
