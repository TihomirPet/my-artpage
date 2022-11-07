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
    let lt = gsap
      .timeline()
      .fromTo(
        [main.current],
        { z: 0, opacity: 0, delay: 0,},
        {
          z: 0,
          opacity: 1,
          stagger: 1,
          delay: 0,
          duration: 0.1,
       
        }
      );

    ScrollTrigger.create({
      trigger: '#scrollpin',
      start: 'top 1',
      end: '+=200%',
      scrub: true,
      pin: true,
      // markers: true,
      animation: lt,
       anticipatePin: 1,
      // id: 'main',
    });

      return () => lt.scrollTrigger.kill();
  }, []);




  //***************************************************************************
  return (
    <div className='d-flex justi  mainWrapper ' id='scrollpin'>
      <div className='col-3 main-text-holder d-flex flex-column ps-5 pt-5 pe-3'>
        <h2 className='font-main-title'>Test</h2>
        <p className='font-main-text  p-2'>
          Damit Ihr indess erkennt, woher dieser ganze Irrthum gekommen ist, und
          weshalb man die Lust anklagt und den Schmerz lobet, so will ich Euch
          Alles eröffnen und auseinander setzen, was jener Begründer der
          Wahrheit und gleichsam Baumeister des glücklichen Lebens selbst
          darüber gesagt hat. Niemand, sagt er, verschmähe, oder hasse, oder
          fliehe die Lust als solche, sondern weil grosse Schmerzen ihr folgen,
          wenn man nicht mit Vernunft ihr nachzugehen verstehe. Ebenso werde der
          Schmerz als solcher von Niemand geliebt, gesucht und verlangt, sondern
          weil mitunter solche Zeiten eintreten, dass man mittelst Arbeiten und
          Schmerzen eine grosse Lust sich zu verschaften suchen müsse.
        </p>
        <div className=' main-holder'></div>
      </div>
      <div className='main-papier'></div>
      {carousel.map((elements, i) => (
        <div
          key={elements.id}
          className='mainHolderImg'
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
