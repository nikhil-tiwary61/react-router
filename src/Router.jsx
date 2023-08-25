import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Porfile from "./components/Profile.jsx";
import ErrorPage from "./components/ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Porfile />,
    },
  ]);

  return <RouterProvider router={router} />;
}
