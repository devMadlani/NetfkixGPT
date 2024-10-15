import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function Body() {
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
 
  return (
    <div>
      <RouterProvider router={appRoter}>
      </RouterProvider>
    </div>
  );
}

export default Body;
