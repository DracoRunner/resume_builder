import { createBrowserRouter } from "react-router-dom";
import HomePage from "./modules/homepage/homepage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
]);
