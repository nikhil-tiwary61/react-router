import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Porfile from "./components/Profile.jsx";
import Popeye from "./components/Popeye.jsx";
import Spinach from "./components/Spinach.jsx";
import DefaultProfile from "./components/DefaultProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Porfile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "popeye", element: <Popeye /> },
      { path: "spinach", element: <Spinach /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
