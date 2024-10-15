import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBack from './VideoBack'

function MainContainer() {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(!movies)return
    const mainMovie = movies[0]
    console.log(mainMovie)
    const {originalTitle,overview,image} = mainMovie
  return (
    <div>
      <VideoTitle title={originalTitle} overview={overview} backIMG = {image} />
      <VideoBack />
    </div>
  );
}

export default MainContainer