import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contract from "./components/Contract";
import Home from "./screens/Home";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
