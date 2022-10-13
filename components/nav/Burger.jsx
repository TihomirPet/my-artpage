import { useState } from 'react';

import Rightnav from './Rightnav';

export default function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='menu-burger-holder' onClick={() => setOpen(!open)}>
        <div
          className={`${
            open ? 'menu-inside-first-open' : 'menu-inside-first'
          }`}></div>
        <div
          className={`${
            open ? 'menu-inside-second-open' : 'menu-inside-second'
          }`}></div>
        <div
          className={`${
            open ? 'menu-inside-third-open' : 'menu-inside-third'
          }`}></div>
   
      </div>
      <Rightnav open={open} />
    </>
  );
}
