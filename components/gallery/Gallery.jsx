// import Link from 'next/link';
// import { useRef, useEffect } from 'react';

// import Layout from '../../components/Layout';


// import Image from 'next/image';


// // *********************************************************************

// export async function getStaticProps() {
//   const response = await fetch(`http://localhost:4001/art`);

//   const data = await response.json();

//   return {
//     props: { content: data },
//   };
// }
// // *********************************************************************
// export default function Gallery({ content }) {
//   // *********************************************************************




  

//   // console.log(content);
//   return (
//     <div className='gallery border'>
//       {content.map((elements) => (
//         <div key={elements.id}>
//           <Link href={`/gallery/${elements.id}`}>
//             <a>
//               <img src={elements.img} width='150' />
//             </a>
//           </Link>
//           <h2> {elements.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }
