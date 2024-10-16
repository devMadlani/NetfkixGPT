import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_API, apiOptions } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

function useFetchMovie() {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const url = MOVIE_API;
    const options = apiOptions;

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      dispatch(addNowPlayingMovies(result));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useFetchMovie;
