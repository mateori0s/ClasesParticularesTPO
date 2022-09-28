import * as React from "react";
import Landing from "./Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
