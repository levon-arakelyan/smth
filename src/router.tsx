import { ReachTheNumber } from './components/activities/ReachTheNumber/CurrentLevel/CurrentLevel';
import type { RouteRecord } from 'vite-react-ssg';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <ReachTheNumber />,
    entry: 'src/components/activities/ReachTheNumber/CurrentLevel/CurrentLevel.tsx',
  }
]
