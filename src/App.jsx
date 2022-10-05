import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contract from "./components/Contract";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sozlesmeler/:name",
      element: <Contract />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
