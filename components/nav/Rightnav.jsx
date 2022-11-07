import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
const internalLinks = [
  {
    id: 1,
    component: <span>Orange</span>,
    image: 'https://picsum.photos/id/1001/300/200',
  },
  {
    id: 2,
    component: <span>Kokosnuss</span>,
    image: 'https://picsum.photos/id/1/300/200',
  },
  {
    id: 3,
    component: <span>Aubergine</span>,
    image: 'https://picsum.photos/id/101/300/200',
  },
  {
    id: 4,
    component: <span>Tomate</span>,
    image: 'https://picsum.photos/id/100/300/200',
  },
];

export default function Rightnav({ open }) {
  let menu = useRef(null);
  let revielMenu = useRef(null);
  let revielMenuBack = useRef(null);

  let revielMenuLink = useRef([]);


  useEffect(() => {
    if (open === false) {
      // console.log(false);
      gsap.to([menu, revielMenu, revielMenuBack], {
        duration: 1.5,
        ease: 'power3.inOut',
        stagger: { amount: 2.5 },

        x: 3000,
      });
    

      gsap.fromTo(
        [
          revielMenuLink.current
        ],
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
    } else if (open === true) {
      console.log(true);
      gsap.to([menu, revielMenu, revielMenuBack], {
        duration: 0.6,
        //  css: { display: 'block' },
        stagger: { amount: 2 },
        ease: 'Power1. easeOut',
        x: 0,
      });
     

      gsap.fromTo(
        [
          revielMenuLink.current
        ,
        ],
        { opacity: 0 },
        {
          opacity: 1,
          x: 100,
          scale: 1,
           duration: 0.5,
          delay:1,
          ease: 'Power3. easeOut',
          stagger: 0.6,
          // ease: 'Power1. easeOut',
        }
      );
    }
  });

  return (
    <div
      ref={(el) => (menu = el)}
      className={`${
        open
          ? 'nav-holder d-flex flex-column justify-content-center'
          : 'nav-holder d-flex flex-column justify-content-center'
      }`}>
      <div
        ref={(el) => (revielMenu = el)}
        className={`${
          open
            ? 'nav-container border border-warning d-flex flex-column justify-content-center'
            : 'nav-container-close d-flex flex-column justify-content-center'
        }`}>
        <ul
          className='internal-nav-links list-unstyled  d-flex flex-column justify-content-around '
          ref={(el) => (revielMenuBack = el)}>
          <li className='box' ref={(el) => (revielMenuLink.current[0] = el)}>
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/'>
              <a>Start</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (revielMenuLink.current[1] = el)}>
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>Bilder</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (revielMenuLink.current[2] = el)}>
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>News</a>
            </Link>
          </li>
          <li className='box' ref={(el) => (revielMenuLink.current[3] = el)}>
            <img src='/images/Frame_Hover.jpg' width={400} />
            <Link href='/about'>
              <a>Standorte</a>
            </Link>
          </li>

          {/* {internalLinks.map((links, index) => (
            <li
              key={links.id}
              className='mt-5 box'
              ref={(el) => (revielMenuLink.current[index] = el)}>
              <a className='text-uppercase'>{links.component}</a>

              <img src={links.image} />
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
