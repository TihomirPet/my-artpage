import React, { useState } from 'react';
import { useEffect, useRef, createRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

//***************************************************************************
export default function Maincontent({ carousel }) {
  //***************************************************************************
  let main = useRef([]);
  //***************************************************************************

  useEffect(() => {
    // let lt = gsap
    //   .timeline()
    //   .fromTo(
    //     [main.current],
    //     { z: 0, opacity: 0, delay: 0, duration: 0.1 },
    //     { z: 0, opacity: 1, stagger: 1, delay: 0, duration: 0.1 }
    //   );

    // ScrollTrigger.create({
    //   trigger: '#scrollpin',
    //   start: 'top top',
    //   end: '+=200%',
    //   scrub: true,
    //   pin: true,
    //   markers: true,
    //   animation: lt,
    //   anticipatePin: 1,
    //   id: 'main',
    // });

    //   return () => lt.scrollTrigger.kill();
  }, []);




  //***************************************************************************
  return (
    <div className='d-flex justify-content-center  mainWrapper ' id='scrollpin'>
      {/* <div className='itemA border ' ref={(el) => (main.current[0] = el)}>
        <div className='itemB border ' ref={(el) => (main.current[1] = el)}>
          <div className='itemC border ' ref={(el) => (main.current[2] = el)}>
            <div className='itemD border ' ref={(el) => (main.current[3] = el)}>
              <div
                className='itemE border '
                ref={(el) => (main.current[4] = el)}>
                <div
                  className='itemF border '
                  ref={(el) => (main.current[5] = el)}>
               
                  <div
                    className='itemG border '
                    ref={(el) => (main.current[6] = el)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {carousel.map((elements, i) => (
        <div
          key={elements.id}
          className='mainHolderImg d-flex justify-content-center '
          ref={(el) => (main.current[i] = el)}>
          <img
            src={elements.src}
            className='mainImg'
            alt='Picture of the author'
          />
        </div>
      ))}
    </div>
  );
}
