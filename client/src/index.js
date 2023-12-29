import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Protected from "./views/Protected/Protected";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/protected", element: <Protected /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup                                                                                                                                                                           />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
