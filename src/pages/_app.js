import '@/styles/css/globals.css'
import { ThemeProvider } from 'styled-components'

import Script from 'next/script'
import Head from 'next/head'

import quickLinksInfo from '@/data/quicklinksinfo.json'
import { selectTheme } from '@/utilities/themeselector'

function MyApp({ Component, pageProps }) {
  const theme = selectTheme(quickLinksInfo.theme)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
