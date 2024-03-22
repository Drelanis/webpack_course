import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/app-image.svg';

const TODO = (a: number) => console.log(a);

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  // // TODO('123');

  return (
    <div data-testid="App.dataTestId">
      <h1 data-testid="Platform.dataTestId">platform = {__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="" />
        <img width={100} height={100} src={avatarJpg} alt="" />
      </div>
      <div>
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
