// import { gsap } from "gsap";
import SplitText from 'gsap';
import { useEffect, useRef, useState } from 'react';
const { gsap } = require('gsap/dist/gsap');
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
/*
SplitText.min.js is a Club GreenSock perk

const { SplitText } = require("gsap/dist/SplitText");

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/

gsap.registerPlugin(SplitText);

export default function Viewport() {
  // ************************************************************
  let splitText = useRef(null);

  let patOne = useRef(null);

  let pat = useRef([]);
  let viewport = useRef([]);
  let viewportSq = useRef([]);
  // ************************************************************
  let onMouseOverHandler = () => {
    gsap.to([splitText], {
      delay: 0.8,
      ease: 'power3.out',
      y: 5,
    });
  };

  useEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      [viewport.current],

      {
        duration: 1.8,
        opacity: 0,
        y: -500,
      },
      {
        opacity: 1,
        y: 0,

        stagger: 0.3,
        ease: 'Power1.Out',

        zIndex: 2,
      }
    ).fromTo(
      [viewportSq.current],

      {
        duration: 1.8,
        // opacity: 0,
        x: -900,
      },
      {
        // opacity: 0.3,
        x: 0,

        stagger: 0.3,
        ease: 'Power1.Out',

        zIndex: 2,
      }
    );

    gsap.fromTo(
      [pat.current],
      { x: 0, scaleX: 1, width: '10%' },
      {
        width: '0%',
        duration: 2,
        ease: 'none',
        transformOrigin: '0% 100%',
        // stagger: 1.2,
        scrollTrigger: {
          trigger: '#vieTrigger',
          start: 'top 0',
          //  end: 'bottom top',
          // id:'view-id',
          scrub: true,
          // markers: true,
        },
      }
    );
  });

  return (
    <div className='viewport d-flex ' id='01'>
      <div
        className='viewport-overlay  d-flex align-items-center  ps-5'
        ref={(el) => (patOne = el)}>
        <div className='vieport-right  col-2 d-flex justify-content-start align-items-end flex-column'>
          <div
            className=' col-10  vieport-right-first '
            ref={(el) => (viewportSq.current[0] = el)}></div>
          <div className=' col-8 mt-2  vieport-right-second  d-flex'>
            <div className='col-5  h-75 vieport-right-second-L'></div>
            <div className='col-6 mt-2 h-100 d-flex flex-column ms-3'>
              <div
                className='col-12  h-25  vieport-right-second-RT'
                ref={(el) => (viewportSq.current[1] = el)}></div>
              <div
                className='col-12  vieport-right-second-RB mt-4  ms-4'
                ref={(el) => (viewportSq.current[2] = el)}></div>
            </div>
          </div>
       
        </div>

        <div className='viewport-left   d-flex flex-column align-items-start   col-5  pt-2 ps-5'>
          <div className='  d-flex  justify-content-start   ps-3 '>
            <h1
              className='font-viewport-title    text-uppercase ps-5'
              ref={(el) => (viewport.current[0] = el)}
              onMouseOver={onMouseOverHandler}>
              Tihomir
            </h1>
          </div>
          <div className='d-flex  justify-content-start  ps-3 '>
            <h1
              className='font-viewport-title   text-uppercase ps-5'
              ref={(el) => (viewport.current[1] = el)}>
              Petrov
            </h1>
          </div>
          <div className='viewport-placeholder  col-1'></div>
        </div>


      </div>

      <div className='wrapbox-1' ref={(el) => (pat.current[0] = el)}>
        {' '}
        <div className='viewportbox-1'></div>
      </div>
      <div className='wrapbox-2' ref={(el) => (pat.current[1] = el)}>
        {' '}
        <div className='viewportbox-2'></div>
      </div>
      <div className='wrapbox-3' ref={(el) => (pat.current[2] = el)}>
        {' '}
        <div className='viewportbox-3'></div>
      </div>
      <div className='wrapbox-4' ref={(el) => (pat.current[3] = el)}>
        {' '}
        <div className='viewportbox-4'></div>
      </div>
      <div className='wrapbox-5' ref={(el) => (pat.current[4] = el)}>
        {' '}
        <div className='viewportbox-5'></div>
      </div>
      <div className='wrapbox-6' ref={(el) => (pat.current[5] = el)}>
        {' '}
        <div className='viewportbox-6'></div>
      </div>
      <div className='wrapbox-7' ref={(el) => (pat.current[6] = el)}>
        {' '}
        <div className='viewportbox-7'></div>
      </div>
      <div className='wrapbox-8' ref={(el) => (pat.current[7] = el)}>
        {' '}
        <div className='viewportbox-8'></div>
      </div>
      <div className='wrapbox-9' ref={(el) => (pat.current[8] = el)}>
        {' '}
        <div className='viewportbox-9'></div>
      </div>
      <div className='wrapbox-10' ref={(el) => (pat.current[9] = el)}>
        {' '}
        <div className='viewportbox-10'></div>
      </div>

      <div className='trigeer' id='vieTrigger'></div>
    </div>
  );
}
