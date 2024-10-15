import React from 'react'
import { useSelector } from 'react-redux'

function MovieCard({image}) {
    // const movies = useSelector((store) => store.movies.nowPlayingMovies);
    // const image = movies[1].image;
    
  return (
    <div className="w-[160px]">
      <img src={image} alt="  " className="rounded" />
    </div>
  );
}

export default MovieCard