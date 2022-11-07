import { useEffect, useRef, useState } from 'react';
// import Footer from '../components/footer/Footer';
import Gallery from '../components/gallery/Gallery';

import Viewport from '../components/header/Viewport';
import Layout from '../components/Layout';
import Loader from '../components/loader/Loader';
import Maincontent from '../components/maincontent/Maincontent';
import gsap from 'gsap';
import dbs from '../dbs';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// **********************************************************************
// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4001/art/');

//   const data = await response.json();

//   return {
//     props: { content: data },
//   };
// }

// **********************************************************************
export default function Home({ content }) {
  // **********************************************************************
  // const [preloader, setPreloader] = useState(true);

  const [carousel, setCarousel] = useState(dbs);
  console.log(carousel);

  // ******************************************************************
  let load = useRef([]);
  let viewport = useRef([]);
  let title = useRef([]);

  // ******************************************************************
  // const [timer, setTimer] = useState(3);

  // let id = useRef(null);

  // let clear = () => {
  //   window.clearInterval(id.current);
  //   setPreloader(false);
  // };

  // useEffect(() => {
  //   id.current = window.setTimeout(() => {
  //     setTimer(timer-1);
  //   }, 2000);

  //   // return () => window.clearInterval(id.current);
  // }, [timer]);

  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // },[timer]);
  // ========================================================================================
  // useEffect(() => {
  //   setTimeout(() => setPreloader(false), 3000);
  // }, []);

  // ======================================================================================

  useEffect(() => {
    // gsap.to('body', { duration: 0, css: { visibility: 'visable' } });

    let tl = gsap.timeline();

    tl.fromTo(
      [title.current],

      {
        duration: 1,
        opacity: 0,
        y: 200,

        skewY: 7,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        stagger: 0.5,
        ease: 'Power1.Out',
      }
    ).to([load.current], {
      opacity: 0,
      stagger: 0.3,
      reversed: 1,
      ease: 'Power4.Out',
    });
  }, []);
  // ******************************************************************

  // ******************************************************************
  return (
    <div>
   
      {/* {preloader ? ( */}
      {/* ) :  ( */}
      <Loader load={load} title={title}></Loader>
      <Layout title={'test nav'}>
        <Viewport viewport={viewport}></Viewport>
        <Maincontent carousel={carousel} />
        {/* <Footer /> */}

        {/* <Gallery content={content} /> */}
      </Layout>
      {/* )} */}
    </div>
  );
}
