import { useEffect, useRef, useState } from 'react';
// import Footer from '../components/footer/Footer';
import Gallery from '../components/gallery/Gallery';
import Viewport from '../components/header/Viewport';
import Layout from '../components/Layout';
import Loader from '../components/loader/Loader';
import Maincontent from '../components/maincontent/Maincontent';
// ********************************************************************** db
import dbs from '../dbs';
import supabase from '../utils/superbaseClient';
// ********************************************************************** bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// ********************************************************************** gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// **********************************************************************

// ********************************************************************** SupaBase fetch data
export async function getStaticProps() {
  let { data: gallery, error } = await supabase.from('gallery').select('*');

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      gallery,
    },
  };
}

// **********************************************************************
export default function Home({ gallery }) {
  // **********************************************************************
  // const [preloader, setPreloader] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(false);

  const [carousel, setCarousel] = useState(dbs);

  console.log(carousel);
  // ******************************************************************

  const paraRef = useRef();
  const titleIndexRef = useRef();
  const countIndexRef = useRef();
  const navRef = useRef();
  let section = useRef([]);

  // ******************************************************************
  let title = useRef([]);

  let load = useRef([]);
  // ====================================================================================== Animation loader

  useEffect(() => {
    // gsap.to('body', { duration: 0, css: { visibility: 'visable' } });

    let tl = gsap.timeline();

    tl.fromTo(
      [title.current],
      { duration: 1, opacity: 0, y: 200, skewY: 7 },
      { opacity: 1, y: 0, skewY: 0, stagger: 0.5, ease: 'Power1.Out' }
    ).to([load.current], {
      opacity: 0,
      stagger: 0.3,
      reversed: 1,
      ease: 'Power4.Out',
    });
  }, []);

  // ****************************************************************** on scroll display sections count sections

  useEffect(() => {
    function navHighlighterActive() {
      // check before scroll if element has active class
      section.current.forEach((cur, index, array) => {
        const sectionId = cur.getAttribute('id');
        const currentIndex = index + 1;
        const hasClass = cur.classList.contains('active');
        const countPages = array.length;

        if (hasClass) {
          // display active class
          paraRef.current.innerText = currentIndex;
          titleIndexRef.current.innerText = sectionId;
          countIndexRef.current.innerText = countPages;
        }
      });
    }

    function navHighlighter() {
      let scrollY = window.pageYOffset;

      section.current.forEach((cur, index) => {
        // find  each element offsetTop offsetTop - 50
        const sectionHeight = cur.offsetHeight;
        const sectionTop = cur.offsetTop - 50;
        const sectionId = cur.getAttribute('id');

        const currentIndex = index + 1;
        // console.log(sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          // display results
          paraRef.current.innerText = currentIndex;
          titleIndexRef.current.innerText = sectionId;
          console.log(sectionHeight);
        }
      });
    }
    navHighlighterActive();
    window.addEventListener('scroll', navHighlighter);
    return () => window.removeEventListener('scroll', navHighlighter);
  }, []);

  // ****************************************************************** add schadow onscroll nav

  useEffect(() => {
    function updatePosition() {
      const scrollDown = window.pageYOffset;

      if (scrollDown > 60) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition;
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <>
      <Layout>
        <Loader load={load} title={title}></Loader>

        <div className='menu-burger-wrapper d-flex flex-column align-items-center justify-content-start  '>
          <div className='row mt-5 d-flex align-items-center justify-content-center'>
            <div
              className={`${
                scrollPosition
                  ? ' menu-burger-section-active  d-flex flex-column align-items-center justify-content-center mt-5 '
                  : ' menu-burger-section  d-flex flex-column align-items-center justify-content-center mt-5 '
              }`}>
              <h2
                ref={titleIndexRef}
                className=' rotation font-menu-section '></h2>
              <h2 className=' rotation font-menu-section'>-</h2>
            </div>

            <div
              className={`${
                scrollPosition
                  ? 'menu-burger-count-active d-flex flex-column align-items-center justify-content-center mt-4'
                  : 'menu-burger-count d-flex flex-column align-items-center justify-content-center mt-4'
              }`}>
              <h2
                ref={paraRef}
                className=' font-menu-count rotation  p-2 count-number'></h2>
              <h2 className='font-menu-count rotation'>/</h2>
              <h2 ref={countIndexRef} className='font-menu-count rotation'></h2>
            </div>
          </div>
        </div>

        <section
          ref={(el) => (section.current[0] = el)}
          id='Home'
          className=' active '>
          <Viewport />
        </section>
        <section ref={(el) => (section.current[1] = el)} id='Galerie'>
          <Gallery gallery={gallery} />
        </section>
        <section ref={(el) => (section.current[2] = el)} id='Werkstatt'>
          <Maincontent carousel={carousel} />
        </section>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
