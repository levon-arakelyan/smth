import { ReachTheNumber } from './components/activities/ReachTheNumber/CurrentLevel/CurrentLevel';
import type { RouteRecord } from 'vite-react-ssg';
import { Navigate } from 'react-router-dom';
import { ActivitiesList } from './components/activities-list/ActivitiesList';
import { reachTheNumber } from './core/constants/activities';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <ActivitiesList />,
  },
  {
    path: `/${reachTheNumber}`,
    element: <ReachTheNumber />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  }
]
