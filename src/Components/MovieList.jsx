import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  // console.log(title)
  //   console.log("movies",movies)
  return (
    <div className="px-4 py-3 ">
      <h1 className="my-4 ml-1 text-3xl text-white font-medium">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-black">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard image={movie.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
