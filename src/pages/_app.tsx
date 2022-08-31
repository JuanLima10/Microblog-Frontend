import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Micro Blog</title>
      <link rel="icon" href="/logo.png" />
    </Head>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
