import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback>
        <About />
      </Suspense>
    ),
  },
];

export default routes;
