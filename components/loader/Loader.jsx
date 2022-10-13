import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ load, title }) {
  return (
    <div className='loader d-flex '>
      <div
        className='loader-overlay  d-flex align-items-center '
        // ref={(el) => (patOne = el)}
      >
        <div className='loader-left   d-flex flex-column align-items-center '>
          <h1
            className='font-loader-title  text-center w-75 text-uppercase testAnimate'
            ref={(el) => (title.current[0] = el)}

            // onMouseOver={onMouseOverHandler}
          >
            Tihomir
          </h1>
          <div className='  w-75 d-flex  justify-content-center '>
            <h1
              className='font-loader-title   text-uppercase'
              ref={(el) => (title.current[1] = el)}>
              Petrov
            </h1>
            <div className='loader-placeholder  '></div>
          </div>
        </div>
      </div>

      <div className='x-1' ref={(el) => (load.current[0] = el)}>
        <div className='v-1'></div>
      </div>
      <div className='x-2 ' ref={(el) => (load.current[1] = el)}>
        <div className='v-2'></div>
      </div>
      <div className='x-3' ref={(el) => (load.current[2] = el)}>
        {' '}
        <div className='v-3'></div>
      </div>
      <div className='x-4' ref={(el) => (load.current[3] = el)}>
        {' '}
        <div className='v-4'></div>
      </div>
      <div className='x-5' ref={(el) => (load.current[4] = el)}>
        {' '}
        <div className='v-5'></div>
      </div>
      <div className='x-6' ref={(el) => (load.current[5] = el)}>
        {' '}
        <div className='v-6'></div>
      </div>
      <div className='x-7' ref={(el) => (load.current[6] = el)}>
        {' '}
        <div className='v-7'></div>
      </div>
      <div className='x-8' ref={(el) => (load.current[7] = el)}>
        {' '}
        <div className='v-8'></div>
      </div>
      <div className='x-9' ref={(el) => (load.current[8] = el)}>
        {' '}
        <div className='v-9'></div>
      </div>
      <div className='x-10' ref={(el) => (load.current[9] = el)}>
        {' '}
        <div className='v-10'></div>
      </div>
    </div>
  );
}
