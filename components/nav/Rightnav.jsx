import { useEffect, useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';


export default function Rightnav({ open, closeMenu }) {
  // ************************************************************************************
  let menu = useRef([]);
  let menuLink = useRef([]);
  // ************************************************************************************

  useEffect(() => {
    if (!open) {
      // console.log(false);
      gsap.to([menu.current], {
        duration: 1.5,
        ease: 'power3.inOut',
        stagger: { amount: 2.5 },

        x: 3000,
      });

      gsap.fromTo(
        [menuLink.current],
        { opacity: 1, scale: 1, x: 100 },
        {
          opacity: 0,
          z: 430,
          scale: 0,
          duration: 1,

          ease: 'Power1. easeOut',
          stagger: { amount: 0.5 },
        }
      );
    } else if (open) {
      // console.log(true);
      gsap.to([menu.current], {
        duration: 0.6,
        //  css: { display: 'block' },
        stagger: { amount: 1.5 },
        ease: 'Power1. easeOut',
        x: 0,
      });

      gsap.fromTo(
        [menuLink.current],
        { opacity: 0, z: 0 },
        {
          opacity: 1,
          z: 100,
          scale: 1,
          duration: 1,
          delay: 1,
          ease: 'Power3. easeOut',
          stagger: 0.6,
          // ease: 'Power1. easeOut',
        }
      );
    }
  });
  // ************************************************************************************
  return (
    <div
      ref={(el) => (menu.current[0] = el)}
      className={`${
        open
          ? 'nav-holder d-flex flex-column justify-content-center'
          : 'nav-holder d-flex flex-column justify-content-center'
      }`}>
      <div
        ref={(el) => (menu.current[1] = el)}
        className={`${
          open
            ? 'nav-container border border-warning d-flex flex-column justify-content-center'
            : 'nav-container-close d-flex flex-column justify-content-center'
        }`}>
        <ul
          className='internal-nav-links list-unstyled  d-flex flex-column justify-content-around '
          ref={(el) => (menu.current[2] = el)}>
          <li
            className='box'
            ref={(el) => (menuLink.current[0] = el)}
            onClick={() => closeMenu()} //onClick Close Menu
          >
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/'>
              <a>Start</a>
            </Link>
          </li>
          <li
            className='box'
            ref={(el) => (menuLink.current[1] = el)}
            onClick={() => closeMenu()} //onClick Close Menu
          >
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/test'>
              <a>Bilder</a>
            </Link>
          </li>
          <li
            className='box'
            ref={(el) => (menuLink.current[2] = el)}
            onClick={() => closeMenu()} //onClick Close Menu
          >
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/#02'>
              <a>Gallery</a>
            </Link>
          </li>
          <li
            className='box'
            ref={(el) => (menuLink.current[3] = el)}
            onClick={() => closeMenu()} //onClick Close Menu
          >
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/#scrollpin'>
              <a>Werk</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
