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
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Yoga Classes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`classes`}>
        <section className="classes-hero">
          <h1>Tailored yoga sessions designed to restore your body&apos;s harmony, leaving you revitalized and flexible.</h1>
          <Image
            src="/chakras-concept-body.jpg"
            alt="Fitness"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
        </section>
        <section className="split-content">
          <div>
            <h1>Balanced Body:</h1>
            <p>Balanced Body is tailored specifically to the participants.  At the beginning of class I ask everyone to shout out an area of the body that is maybe ailing them or feels tight that day.  I sequence the class specifically to what body parts the participants give me.  THIS IS NOT FLOW YOGA!  Sometimes we stay on our backs the entire class, sometimes we roll out on a yoga therapy ball.  The Sky is the limit but I guarantee that you will leave feeling more mobile and less tight.</p>
            <Link href="https://app.acuityscheduling.com/schedule.php?owner=19156776&appointmentType=26815799" target="_blank">
              Join Now
            </Link>
          </div>
          <Image
            src="/gyan-mudra.jpg"
            alt="Fitness"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '40%', height: 'auto', objectFit: 'cover' }}
            priority
          />
        </section>
      </main>
    </>
  )
}