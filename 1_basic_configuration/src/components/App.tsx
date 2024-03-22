import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/app-image.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div>
        <img width={100} height={100} src={avatarPng} alt="" />
        <img width={100} height={100} src={avatarJpg} alt="" />
      </div>
      <div>
        asfasfasfasf asfasfasfasf1111 asfasfasfasf1111
        asfasfasfasf1111asfasfasfasfasfasf
        <Calendar color="red" width={50} height={50} />
      </div>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        Increase
      </button>
      <Outlet />
    </div>
  );
};
