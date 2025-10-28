import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Astro — Breakthrough Readings</title>
        <meta name="description" content="When you've tried everything but still feel stuck — let the stars show what's hidden." />
      </Head>
      <main>
        <Hero />
        <Services />
        <Footer />
      </main>
    </>
  )
}
