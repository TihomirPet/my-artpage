import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  let boxRef = useRef(null);
  let box2Ref = useRef(null);
  let box3Ref = useRef(null);
  let box4Ref = useRef(null);
  let box5Ref = useRef(null);
  let box6Ref = useRef(null);
  let box7Ref = useRef(null);
  let box8Ref = useRef(null);
  let box9Ref = useRef(null);
  let box10Ref = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   boxRef,
    //   {
    //     opacity: 0,
    //     scale: 1,
    //     x: 0,
    //   },
    //   {
    //     opacity: 1,
    //     x: 10,
    //     scale: 1,
    //     duration: 1,
    //     ease: 'none',
    //     stagger: 0.5,
    //     scrollTrigger: {
    //       trigger: '#triggerB',
    //       start: 'top 400',
    //       end: 'bottom bottom',
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      [
        boxRef,
        box2Ref,
        box3Ref,
        box4Ref,
        box5Ref,
        box6Ref,
        box7Ref,
        box8Ref,
        box9Ref,
        box10Ref,
      ],
      { x: 0, scaleX: 1, width: '10%'},
      {
        width: '0%',
        duration: 2,
        ease: 'none',
        transformOrigin: '0% 100%',
        // stagger: 1.2,
        scrollTrigger: {
          trigger: '#triggerB',
          start: 'top 400',
          end: 'bottom bottom',
          id:'footer',
          scrub: true,
          // scrub: 0.5,
          markers: true,
        },
      }
    );
  
  }, []);

  return (
    <>
      <div className='footer d-flex '>
        <div className='container footer-overlay  d-flex align-items-center justify-content-center'>
          <h1 className='text-uppercase text-white'>Test</h1>
        </div>

        <div className='footer-wrapper  d-flex ' id='triggerB'>
          <div ref={(el) => (boxRef = el)} className='  box col-1'></div>
          <div ref={(el) => (box2Ref = el)} className=' box-2 col-1'></div>
          <div ref={(el) => (box3Ref = el)} className='  box-3 col-1'></div>
          <div ref={(el) => (box4Ref = el)} className='  box-4 col-1'></div>
          <div ref={(el) => (box5Ref = el)} className='  box-5 col-1'></div>
          <div ref={(el) => (box6Ref = el)} className='  box-6 col-1'></div>
          <div ref={(el) => (box7Ref = el)} className='  box-7 col-1'></div>
          <div ref={(el) => (box8Ref = el)} className='  box-8 col-1'></div>
          <div ref={(el) => (box9Ref = el)} className='  box-9 col-1'></div>
          <div ref={(el) => (box10Ref = el)} className='  box-10 col-1'></div>
        </div>
      </div>
    </>
  );
}
