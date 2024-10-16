import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovie } from "../utils/movieSlice";
import { apiOptions } from "../utils/constant";

function useFetchPopular() {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
   const url =
     "https://tvshow.p.rapidapi.com/Movie/Popular?Page=340&Language=en-US&Adult=true";
   const options = apiOptions;

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
