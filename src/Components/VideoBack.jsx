import React from "react";
import { useSelector } from "react-redux";
import useGetTrailer from "../Hooks/useGetTrailer";

function VideoBack({ id }) {
  // console.log("id", id);
  useGetTrailer(id);
  const urlId = useSelector((store) => store.movies.trailerUrl);
  console.log(urlId)

  return (
    <div>
      {urlId ? (
        <iframe
          className=" w-full h-screen"
          src={
            "https://www.youtube.com/embed/" +
            urlId +
            "?autoplay=1&mute=1&enablejsapi=1&loop=1&controls=0"
          }
          title="YouTube video player"
          allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: "none" }}
        ></iframe>
      ) : (
        <div className="bg-black w-full h-[600px] text-white flex justify-center ">
          <p className="ml-[500px] my-auto text-2xl font-semibold font-serif text-center animate-bounce ">

          Trailer is stuck in TRAFFIC <br />
          Enjoy Scrolling
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoBack;
