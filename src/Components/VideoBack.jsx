import React from "react";
import {  useSelector } from "react-redux";
import useGetTrailer from "../Hooks/useGetTrailer";
 
function VideoBack({ id }) {
  console.log("id",id)
     useGetTrailer(id)
  const trailerUrl = useSelector((store)=> store.movies.trailerUrl)
  return (
    <div>
      {trailerUrl ? (
        <iframe
          className="absolute top-0 w-full h-screen"
          src={trailerUrl}
          title="YouTube video player"
          allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{  border: "none" }}
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
}

export default VideoBack;
