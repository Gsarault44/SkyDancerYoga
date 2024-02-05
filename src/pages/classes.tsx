import { useState } from 'react'; 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  const [isHovering, setIsHovered] = useState(false);


  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Yoga Classes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`classes`}>
        <section className="classes-hero" style={{ backgroundImage: 'url(/hero/yoga-beach.jpg)'}}>
          <h1>Tailored yoga sessions designed to restore your body&apos;s harmony, leaving you revitalized and flexible.</h1>
        </section>
        <section className="split-content">
          <div>
            <h1>Mindful Movement:</h1>
            <p>Mindful Movement is tailored specifically to the participants.  At the beginning of class I ask everyone to shout out an area of the body that is maybe ailing them or feels tight that day.  I sequence the class specifically to what body parts the participants give me.  THIS IS NOT FLOW YOGA!  Sometimes we stay on our backs the entire class, sometimes we roll out on a yoga therapy ball.  The Sky is the limit but I guarantee that you will leave feeling more mobile and less tight.</p>
            
              <button className={`toggle-tooltip ${isHovering ? 'open' : ''}`} onClick={() => setIsHovered(!isHovering)}>
                Props needed &nbsp;
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L9 9L17 1" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            <div className="tooltip-wrapper">
              {isHovering && <div className="tooltip">
                <ul>
                  <li>- Blanket or large towel</li>
                  <li>- Yoga therapy ball (tennis ball, racquet ball, lacross ball works too)</li>
                  <li>- Yoga block</li>
                  <li>- Yoga strap (tie, belt works too)</li>
                  <li>- Fridays at 5:30pm via zoom</li>
                </ul>
              </div>}
            </div>
            <Link className="button" href="https://app.acuityscheduling.com/schedule.php?owner=19156776&appointmentType=26815799" target="_blank">
              Join
            </Link>
          </div>
          <div>
            <Image
              src="/gyan-mudra.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              priority
            />
          </div>
        </section>
        <section className="figure-section">
          <div className="figure-section__inner">
            <h1>Yoga + Brunch</h1>
            <p>Yoga + Brunch is offered once per month.  This is an in-person class at the Hyatt Courthouse in Arlington, VA.  This class is a luxurious movement experience that will leave your joints more mobile, your muscles longer, your spirit calmer and you a little taller!  Join us for brunch following class and get to know your fellow yogis!</p>
            <span>Sundays 10:00am - 11:15pm Brunch at 11:30am</span>
            <Link className="button" href="https://app.acuityscheduling.com/schedule.php?owner=19156776&appointmentType=27787580" target="_blank">Join</Link>
          </div>
        </section>
        <section className="lotus">
          <div className="lotus__inner">
            <div>
              <Image
                src="/lotus-flower.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <h1>Monday Morning Yoga on Zoom 45-min</h1>
              <p>Revitalize your Mondays with 45-minute Zoom yoga. Experienced instructor, seamless flow, and renewed energy. Suitable for all levels, start your week centered and balanced. Join us for a revitalizing online class.</p>
              <div>
                <Link className="button" href="https://app.acuityscheduling.com/schedule.php?owner=19156776&appointmentType=42187233" target="_blank">Join</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}