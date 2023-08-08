import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ color: "black" }}>page not found</h1>,
  },
  {
    path: "/html",
    element: <HTML />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
