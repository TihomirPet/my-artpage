// import React from 'react';

// export async function getStaticPaths() {
//   const response = await fetch(`http://localhost:4001/art/`);

//   const data = await response.json();

//   const paths = data.map((element) => {
//     return {
//       params: { id: element.id.toString() },
//     };
//   });

//   return{
//     paths,
//     fallback:false
//   }
// }



// export async function getStaticProps(context) {

// const id =context.params.id
//  const response = await fetch(`http://localhost:4001/art/${id}`);
// const data = await response.json();

// return {
//   props: {element:data}
// };

// }



// export default function Details({ element }) {
//   return (
//     <div>
//       <h2>{element.title}</h2>
//       <img src={element.img} width='150' />
//     </div>
//   );
// }

