import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { ActivitiesList } from "./components/activities-list/ActivitiesList";
import { ReachTheNumber } from "./components/activities/ReachTheNumber/CurrentLevel/CurrentLevel";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ActivitiesList />,
      },
      {
        path: "/reach-the-number",
        element: <ReachTheNumber />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ]
  }
]);
