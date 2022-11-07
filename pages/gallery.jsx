import Link from 'next/link';
// import supabase from '../utils/superbaseClient';
import Layout from '../components/Layout'
import Image from 'next/image';
import supabase from '../utils/superbaseClient';



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

export default function Gallery({ gallery }) {
  console.log(gallery);
  return (
    <Layout>
      <div className='gallery border border d-flex ' id='03'>
        {gallery.map((elements) => (
          <div key={elements.id} className=' border'>
            <Link href={`/galleryitem/${elements.id}`}>
              <a>
                <Image
                  src={`/images/${elements.image}`}
                  width='150'
                  height='100%'
                  alt='image autor'
                />
              </a>
            </Link>
            <h2> {elements.title}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
