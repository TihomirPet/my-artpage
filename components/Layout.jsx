import Head from 'next/head';
import Burger from './nav/Burger';
// import Rightnav from './nav/Rightnav';

export default function Layout({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>{title || 'Create Next App'}</title>
        <meta name='description' content='Art' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crosSorigin></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'>
        
        </link>
      </Head>
      <Burger />

      {/* <main className='site-main'>
        {title && <h1 className='text-uppercase'>{title}</h1>}
      </main> */}

      {children}
    </>
  );
}
