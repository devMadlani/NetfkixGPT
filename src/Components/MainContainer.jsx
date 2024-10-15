import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBack from "./VideoBack";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[19];
  console.log(mainMovie);
  const { originalTitle, overview, image, id } = mainMovie;
  console.log(id)
  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} backIMG={image} />
      <VideoBack id={id} />
    
    </div>
  );
}

export default MainContainer;
