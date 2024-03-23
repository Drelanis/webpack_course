import { createBrowserRouter } from 'react-router-dom';
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';
import { App } from '@/components/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Можно внедрять корневые компоненты, которые внутри себя имеют в себе необходимое, все роутингы, функционал и так далее
    // Какие-то отдельные страницы
    children: [...shopRoutes, ...adminRoutes],
  },
]);
