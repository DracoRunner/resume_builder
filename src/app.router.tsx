import { createHashRouter } from "react-router-dom";
import App from "./app/app";
import HomePage from "./app/modules/homepage/homepage";
import Resume from "./app/modules/resume/resume";
const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/create-resume",
        element: <Resume />,
      },
      { path: "", element: <HomePage /> },
    ],
  },
]);

export default appRouter;
