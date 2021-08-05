import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.css" rel="stylesheet"></link>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.4.0/mapbox-gl.js"></script>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </div>
  )
}
