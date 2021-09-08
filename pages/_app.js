import Head from 'next/head';
import 'bootstrap/scss/bootstrap-reboot.scss';
import '../styles/styles.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
