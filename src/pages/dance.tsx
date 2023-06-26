import Head from 'next/head'
import Image from 'next/image'
import { Crimson_Text } from 'next/font/google'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cormorantGaramond = Crimson_Text({ subsets: ['latin'], weight: '400' })

export default function Dance() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${cormorantGaramond.className}`}>
        <div className="dance-hero">
          <h1>Sharing our passion for dance</h1>
          <Carousel
            responsive={responsive}
            containerClass="carousel"
            autoPlay={true}
            transitionDuration={500}
            arrows={false}
            infinite={true}
          >
            <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
              <source src="/band-choreo.mp4" />
            </video>
            <Image
              src="/dance.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </Carousel>
        </div>
        <div className="dance-split-media-content">
          <div className="inner">
            <div className="split-content">
              <p>Skydancer Entertainment is a preeminent dance casting agency based in the Washington DC area.  We cast dancers of all genres for every type of event in every part of the United States.</p>
              <button className="button">Get in Touch</button>
            </div>
            <div className="split-media">
              <Image
                src="/dance.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
        <div className="dance-split-media-content">
          <div className="inner">
            <div className="split-media">
              <Image
                src="/stretch.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="split-content">
              <p>Dancers bring energy and excitement to any event.  Add flare to your meeting, sophistication to your gala, hype to your wedding or bar/bat mitzvah.  If you can dream it we can create it.  The sky&apos;s the limit!</p>
              <span>Skydancer Entertainment is your number one source for DANCE entertainment!</span>
            </div>
          </div>
        </div>
        <div className="video-banner">
          <div className="inner">
            <div className="video-banner-content">
              <h3>What We Do</h3>
              <p>Choreograph and teach first dances for wedding couples </p>
            </div>
            <video controls style={{ width: '100%', height: 'auto', objectFit: 'contain' }}>
              <source src="/AudraWedding.mov" />
            </video>
          </div>
        </div>
        <div>
        <Carousel
          responsive={responsive}
          containerClass="carousel"
        >
          <div>
            “Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”
            —Audra C.
          </div>
          <div>
            “Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”
            —Audra C.
          </div>
        </Carousel>
        </div>
      </main>
    </>
  )
}
