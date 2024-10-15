import React, { useEffect } from "react";
import Header from "./Header";
import useFetchMovie from "../Hooks/useFetchMovie";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

function Browse() {
  useFetchMovie()
  return (
    <div>
      <Header />
      <MainContainer />
    
      <SecondoryContainer />
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
