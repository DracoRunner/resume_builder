import { createHashRouter } from "react-router-dom";
import App from "./app/app";
import HomePage from "./app/modules/homepage/homepage";
const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      { path: "", element: <HomePage /> },
    ],
  },
]);

export default appRouter;
