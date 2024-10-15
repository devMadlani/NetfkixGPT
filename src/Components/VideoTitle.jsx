
import React,{ useEffect, useState } from "react";
function VideoTitle(props) {

 const { title, overview, backIMG } = props;
  return (
    <div className="absolute w-full pt-[10%] h-[90vh] flex z-10 bg-transparent bg-gradient-to-r from-black ">
      <div className="text-center transition-transform duration-500 ml-3">
        <div className="flex flex-col gap-4 max-w-1/2 ">
          <div className="max-w-[500px] ml-12">
            <h1 className="text-6xl font-extrabold mb-2 text-white">{title}</h1>
            <p className="text-xl text-white font-medium font-mono text-left my-3  mx-4">
              {overview}
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="w-24 py-2 rounded-lg border text-black bg-white hover:bg-opacity-60">
              Play
            </button>
            <button className="w-24 py-2 rounded-lg border text-white bg-[rgba(0,0,0,0.1)]">
              More Info
            </button>
          </div>
        </div>

        {/* <div className="w-1/2 flex items-center justify-center transition-transform duration-500 transform">
          <img
            src={backIMG}
            alt="Background"
            className="h-4/5 w-3/5 rounded-3xl object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};


export default VideoTitle;
