import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Why from '../components/Why'
import Bootcamp from '../components/Bootcamp'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import FloatingRegisterButton from '../components/FloatingRegisterButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Global Income Bootcamp - Build Your Dollar Income Engine</title>
        <meta name="description" content="Join the 2-day physical bootcamp in Abuja and learn how to build a global income engine using AI and your phone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingRegisterButton />

      <main className="min-h-screen">
        <Hero />
        <About />
        <Why />
        <Bootcamp />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
