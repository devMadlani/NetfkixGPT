import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

function GptSearchBar() {
  const language = useSelector((store) => store.config.lang);
  const searchRef = useRef(null);
  const handleGptSearchClick = async () => {
    //make API call to GPT and get movie Results
    const searchText = searchRef.current.value;
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie for the query" +
      searchText +
      "only give me name of 8 movies, comma seperated like the example result given ahead. Example: kill , kalki, 3 idiots, RRR , jigra";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="grid-cols-12 grid w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className="p-2 px-4 m-4 border border-gray-500 rounded-2xl bg-[rgba(0,0,0,0.7)] text-white col-span-10"
          placeholder={lang[language].getSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 text-white bg-red-700  rounded-lg col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
