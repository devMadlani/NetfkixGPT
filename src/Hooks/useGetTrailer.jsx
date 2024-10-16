import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerUrl } from "../utils/movieSlice";
import { apiOptions } from "../utils/constant";

function useGetTrailer(id) {
  const dispatch = useDispatch();
  console.log(id);
  const getTrailers = async () => {
    const url = `https://tvshow.p.rapidapi.com/Video/${id}/Movie?Language=en-US`;
    const options = apiOptions
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      const trailer = result.find((res) => res.type === "Trailer");
      // console.log(trailer);
      if (trailer && trailer.url) {
        const videoId = new URL(trailer.url).searchParams.get("v");
        dispatch(
          addTrailerUrl(videoId)
        );
      } else {
        console.error("Official Trailer not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrailers();
  }, [id]);
}

export default useGetTrailer;
