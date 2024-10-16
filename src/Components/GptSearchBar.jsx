import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

function GptSearchBar() {
    const language =  useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[12%] flex justify-center">
      <form className="grid-cols-12 grid w-1/2">
        <input
          type="text"
          className="p-2 px-4 m-4 border border-gray-500 rounded-2xl bg-[rgba(0,0,0,0.7)] text-white col-span-10"
          placeholder={lang[language].getSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 text-white bg-red-700  rounded-lg col-span-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar