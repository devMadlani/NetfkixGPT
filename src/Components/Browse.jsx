import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovie from "../Hooks/useFetchMovie";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import useFetchPopular from "../Hooks/useFetchPopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  useFetchMovie();
  useFetchPopular();
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}

      {/* 
          MainContainer
            -VideoBackGround
            -videoTitle
          Secondory Container
            -MovieLists
              cards                                                   
      */}
    </div>
  );
}

export default Browse;
