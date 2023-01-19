import { createBrowserRouter } from "react-router-dom";
import HomePage from "./features/homepage/homepage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "page",
    element: <div>Page</div>,
  },
  {
    path: "*",
    element: <div>Home</div>,
  },
]);
