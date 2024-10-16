import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function Body() {
  const movies = useSelector((store) => store.movies);
  const msg = movies.nowPlayingMovies?.message;
  const appRoter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  // if(msg){
  //   return (
  //     <div className="flex justify-center my-48">
  //       <h1 className="mx-28 animate-bounce text-7xl font-mono">We are currently out off the Request... <br/> You should spent your time with your family</h1>
  //     </div>
  //   )
  // }
  return (

    <div>
      <RouterProvider router={appRoter}>
      </RouterProvider>
    </div>
  );
}

export default Body;
