import Link from 'next/link';
// import supabase from '../utils/superbaseClient';
import Layout from '../../components/Layout';
 import Image from 'next/image';
export async function getStaticProps() {
  // const { data } = await supabase.from('gallery').select('*');
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


export default function Gallery({ gallery}) {
  //  console.log(scrollPosition);
  return (
    <div
      className='gallery   d-flex justify-content-around align-items-center'
      id='02'>
      {gallery.map((elements) => (
        <div key={elements.id}>
          <Link href={`/galleryitem/${elements.id}`} className='gallery-link'>
            <a>
              <div
                key={elements.id}
                className='gallery-element  p-2 d-flex align-items-center'>
                <div className='gallery-text col-3 '>
                  <h3 className='font-title text-uppercase'>
                    {elements.title}
                  </h3>
                </div>
                <div className='gallery-image border col-9'>
                  <img
                    src={`/images/${elements.image}`}
                    width='100%'
                    height='auto'
                    alt='image autor'
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}

     
    </div>
  );
}
