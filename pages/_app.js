import Layout from '../component/layouts';
import HeroFooter from '../component/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html, body{
          background-color: white;
          margin: 0;
          padding: 0;
        }`
      }
      </style>
      <Layout/>
      <Component {...pageProps} />
      <HeroFooter/>
    </>
  );
}

export default MyApp;
