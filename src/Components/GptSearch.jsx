import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_URL } from '../utils/constant';

function GptSearch() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-screen">
      <div className="absolute -z-10 ">
        <img src={BACK_URL} className="h-screen w-screen"  alt="" />
      </div>
      {/* <div className='absolute w-full mt-28 flex flex-col items-center'> */}

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch