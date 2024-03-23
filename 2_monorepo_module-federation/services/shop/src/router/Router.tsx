import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Shop } from '@/pages/Shop';
import { App } from '@/components/App';
import { UserCard } from '@packages/shared';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={'Loading...'}>
            <div style={{ color: 'red' }}>
              <h1>second page</h1>
              <UserCard username={'FROM SHOP'} />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
