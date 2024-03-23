import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Link to={'/admin'}>Admin</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <Outlet />
    </div>
  );
};
