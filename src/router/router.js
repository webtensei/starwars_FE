import Character from '../pages/Character';
import Personal from '../pages/Personal';

export const defaultRouterConfig = [
  { path: '/', element: Character },
  { path: '/people/:id', element: Personal },
  // {path: '/:id/vehicles', element: Profile},
  { path: '/error', element: Error },
];
