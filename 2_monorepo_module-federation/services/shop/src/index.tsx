import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Shop } from '@/pages/Shop';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
