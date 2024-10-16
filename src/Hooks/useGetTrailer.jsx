import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerUrl } from "../utils/movieSlice";

function useGetTrailer(id) {
  const dispatch = useDispatch();
  // console.log(id);
  const getTrailers = async () => {
    const url = `https://tvshow.p.rapidapi.com/Video/${id}/Movie?Language=en-US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c7db4ccabbmsh8bf7fe83717f335p12127fjsnc03cd100cb48",
        "x-rapidapi-host": "tvshow.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      console.log(await response.json());
      const result = await response.json();
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
