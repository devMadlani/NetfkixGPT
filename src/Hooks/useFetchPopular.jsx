import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovie } from "../utils/movieSlice";

function useFetchPopular() {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
   const url =
     "https://tvshow.p.rapidapi.com/Movie/Popular?Page=1&Language=en-US&Adult=true";
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
     console.log(result);
     dispatch(addPopularMovie(result));
   } catch (error) {
     console.error(error);
   }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useFetchPopular;
