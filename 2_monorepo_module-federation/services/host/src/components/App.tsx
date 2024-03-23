import { AdminRoutes, ShopRoutes } from '@packages/shared';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Link to={AdminRoutes.about}>Admin</Link>
      <br />
      <Link to={ShopRoutes.main}>Shop main</Link>
      <br />
      <Link to={ShopRoutes.second}>Shop second</Link>
      <Outlet />
    </div>
  );
};
