import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondoryContainer() {
  const movies = useSelector((store) => store.movies);
  console;
  return (
    <div className="bg-black">
      <div className="-mt-32 relative z-50 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
    </div>
  );
}

export default SecondoryContainer;
