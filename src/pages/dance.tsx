import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Urbanist } from 'next/font/google'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] })

export default function Dance() {
  const [showWeddingModal, setShowWeddingModal] = useState(false);

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
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.className} dance`}>
        <header className="header">
          <div>
            <nav>
              <Link href="/fitness">
                Fitness
              </Link>
              <Link href="/dance">
                Dance
              </Link>
              <Link href="/yoga">
                Yoga
              </Link>
            </nav>
            <div className="head-logo">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="Skydance Entertainment"
                  width={200}
                  height={100}
                  priority
                />
              </Link>
            </div>
          </div>
        </header>
        <div className="dance-hero">
          <h1>Sharing our passion for dance</h1>
          <Carousel
            responsive={responsive}
            containerClass="carousel"
            autoPlay={true}
            transitionDuration={1000}
            arrows={false}
            infinite={true}
          >
            <Image
              src="/dance.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/ballet-yellow.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/ballet.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/bar-mitzvah.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/bubbles.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
              <source src="/band-choreo.mp4" />
            </video>
            <Image
              src="/crowd.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/follow-the-leader.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
            <Image
              src="/pink.png"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
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
                src="/dance.png"
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
            </div>
          </div>
          <h2 className="heading2">Skydancer Entertainment is your number one source for DANCE entertainment!</h2>
        </div>
        {showWeddingModal && <>
          <div className='catcher' onClick={() => setShowWeddingModal(!showWeddingModal)}></div>
          <div className="modal">
            <span className="close" onClick={() => setShowWeddingModal(!showWeddingModal)}>X</span>
            <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
                <source src="/AudraWedding.mov" />
            </video>
            <blockquote>
              “Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”
              <cite>—Audra C.</cite>
            </blockquote>
          </div>
        </>}
        <div className="what-we-do">
          <div className="inner">
            <div className="what-we-do-content">
              <h2 className="heading">What We Do</h2>
              <video autoPlay muted loop style={{ width: '100%', height: '400px', objectFit: 'contain' }}>
                <source src="/skydancer-promo.mov" />
              </video>
              <ul>
                <li><p><strong>Choreograph and Teach:</strong> first dances for wedding couples.</p>
                <span className="clickable" onClick={() => setShowWeddingModal(!showWeddingModal)}>View Sample</span></li>
                <li><p><strong>Corporate and other Events:</strong>  Choreograph and perform productions for corporate events.</p></li>
                <li><p><strong>Flash mobs:</strong>  Choreograph and perform flash mobs for any event.</p></li>
                <li><p><strong>Instruct and Perform:</strong>  Choreograph, instruct and perform salsa, ballroom, hip hop, broadway jazz, etc.</p></li>
                <li><p><strong>Bands:</strong> Choreograph and instruct bands.</p></li>
              </ul>
            </div>
            <div className="what-we-do-content">
              
            </div>
          </div>
        </div>
        <div className="testimonials">
          <h2 className="heading">Testimonials</h2>
          <Carousel
            responsive={responsive}
            containerClass="carousel inner"
            infinite
          >
            <div className="quote">
              <blockquote>
                <p>“Wendy was fantastic to work with on our wedding first dance. Not only was she creative with her choreography for a dance that really wowed our guests, but she was also extremely patient with us helping us to nail it on the day of the wedding.”</p>
              </blockquote>
              <cite>—Audra C.</cite>
            </div>
            <div className="quote">
              <blockquote>
                <p>“Working with Skydancer Entertainment has given me the privilege to work as a performer and motivator to help families and their guests celebrate moments they will never forget.”</p>
              </blockquote>
              <cite>—Jamie S.</cite>
            </div>
          </Carousel>
        </div>
        {/* <div className="video-break">
          <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/skydancer-promo.mov" />
          </video>
        </div> */}
        <div className="about">
          <h2 className="heading">About</h2>
          <p>Wendy Christensen began her dance career at age six with jazz, tap and ballet.  She went on to compete and place in the top three in several dance competitions both solo and with her high school dance team.  In college she was introduced to ballroom-dance and began competing in DanceSport competitions across the country.  In 2003 she and her partner took first place in Amateur Cabaret at the National Competition, making them National Champions.  Since moving to the DC area she has taken up salsa dance and continues to perform and compete at Salsa Congresses across the country.  Wendy holds a B.S in Exercise Science and is a certified exercise physiologist through the American College of Sports Medicine.  When she isn’t dancing you can find her teaching yoga, training clients or teaching couples their first dance for their wedding!</p>
          <Image
            src="/wendy.png"
            alt="Fitness"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '90%', objectFit: 'cover' }}
            priority
          />
        </div>
      </main>
      <footer className="footer">
        <div className="inner">
          <p>Copyright &copy; {new Date().getFullYear()} SkydancerEntertainment - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
