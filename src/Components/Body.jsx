import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
        <RouterProvider router={appRoter} />

    </div>
  )
}

export default Body