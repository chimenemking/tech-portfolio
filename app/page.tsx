import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-[rgba(36,36,36,0.94)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Chimenem's Portfolio</title>
      </Head>

      <Header/>
  

      {/* Hero */}
      <section id='hero' className='snap-center'>
      <Hero/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}

      {/* skills */}

      {/* projects */}

      {/* Contact Me*/}
    </div>
  )
}
