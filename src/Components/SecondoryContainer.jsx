import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondoryContainer() {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-50 "></div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies } />
    </div>
  );
}

export default SecondoryContainer;
