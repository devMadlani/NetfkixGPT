import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_API } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

function useFetchMovie() {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const url = MOVIE_API;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c7db4ccabbmsh8bf7fe83717f335p12127fjsnc03cd100cb48",
        "x-rapidapi-host": "tvshow.p.rapidapi.com",
      },
    };

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
