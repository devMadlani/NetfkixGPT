import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerUrl } from "../utils/movieSlice";

function useGetTrailer(id) {
  const dispatch = useDispatch();
  console.log(id);
  const getTrailers = async () => {
    const url = `https://tvshow.p.rapidapi.com/Video/${id}/Movie?Language=en-US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "155e74d4e7msh30cda815f6400a6p1d68f0jsnb937796fa364",
        "x-rapidapi-host": "tvshow.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      const trailer = result.find((res) => res.type === "Trailer");
      console.log(trailer);
      if (trailer && trailer.url) {
        const videoId = new URL(trailer.url).searchParams.get("v");
        dispatch(
          addTrailerUrl(
            `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0`
          )
        );
      } else {
        console.error("Official Trailer not found");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    getTrailers();
  }, []);
}

export default useGetTrailer;
