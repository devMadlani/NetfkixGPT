
import React,{ useEffect, useState } from "react";
function VideoTitle(props) {

 const { title, overview, backIMG } = props;
  return (
    <div className="absolute pt-[10%]  flex ">
      <div className="text-center transition-transform duration-500 ml-3 ">
        <div className="flex flex-col gap-4 max-w-1/2 ml-12">
          <div className="max-w-[500px] ml-12">
            <h1 className="text-6xl font-extrabold mb-2 text-white">{title}</h1>
            <p className="text-xl text-white font-medium font-mono text-left my-3  mx-4">
              {overview}
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="w-36 py-4 rounded-lg border text-black bg-white hover:bg-opacity-80 font-bold">
              Play
            </button>
            <button className="w-36 py-4 rounded-lg border text-white bg-gray-500 bg-opacity-30 font-bold hover:bg-opacity-40">
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
