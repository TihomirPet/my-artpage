import React from 'react';
import Layout from '../../components/Layout';
import supabase from '../../utils/superbaseClient';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef} from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


// ************************************************************************************

gsap.registerPlugin(ScrollTrigger);

// ***********************************************************************************
 

export async function getStaticPaths() {
  const { data: gallery, error } = await supabase.from('gallery').select('id');

  const paths = gallery.map((element) => {
    return {
      params: { id: element.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const { data: element, error } = await supabase
    .from('gallery')
    .select('*,images(*)')
    .eq('id', id)
    .single();

  return {
    props: { element },
  };
}



export default function Details({ element }) {
  let detail = useRef([]);

  //***************************************************************************

  useEffect(() => {
    let lt = gsap
      .timeline()
      .fromTo(
       [ detail.current],
        { z: 0, opacity: 0, delay: 0, duration: 0.1 },
        { z: 0, opacity: 1, stagger: 1, delay: 0, duration: 0.1 }
      );
    ScrollTrigger.create({
      trigger: '#scrollpin-details',
      start: 'top 1',
      end: '+=200%',
      scrub: true,
      pin: true,
      // markers: true,
      animation: lt,
      //  anticipatePin: 1,
      // id: 'detail',
    });
    return () => lt.scrollTrigger.disable();
  }, []);

  //***************************************************************************

  // console.log(element.images);
  // console.log(JSON.stringify(element, null, 2));
  return (
    <Layout>
      <div
        className='details d-flex'
        id='scrollpin-details'
      
        >
        <div className='col-2 border'>
          <h2>{element.title}</h2>
        </div>

        {element.images.map((elm, i) => (
          <div
            key={elm.id}
            className='details-holder d-flex justify-content-center '
            ref={(el) => (detail.current[i] = el)}>
            <img
              className='details-image'
              key={elm.id}
              src={`/images/${elm.image}`}
              alt='art'
            />
          </div>
        ))}
        <div className='col-2 border border-warning details-linkback'>
          <Link href={'/#02'}>
            <a>back</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
