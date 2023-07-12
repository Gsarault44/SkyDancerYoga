import Head from 'next/head'
import Image from 'next/image'
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
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`home`}>
          <Slider {...settings}>
            <div>
              <Image
                src="/hero/beach.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/black-and-white-calm-down.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/black-and-white-child-pose.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <h1>Dance in the sky, simply for the delight of it and become one with it all</h1>
              <Image
                src="/hero/dancer-pose.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/natarajasana.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/pose-against-sunset.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/practicing-yoga-sunrise.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/vashi-holding-toe.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/warrior-II-bluish.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/wendy-yoga-1.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/wendy-yoga-2.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/wendy-yoga-3.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/relax-nature.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <Image
                src="/hero/yoga-beach.jpg"
                alt="Fitness"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                priority
              />
            </div>
          </Slider>
        <section className="about" id="about">
          <Image
            src="/waterfall.jpg"
            alt="Fitness"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
          <div className="about__content">
            <p>Wendy’s fascination with the human body began at an early age as a dancer.  She still marvels at the sophisticated design of this mortal vehicle and seeks to teach her students practical tools to enhance their life journey both physically and spiritually.</p>
            <p>Wendy’s classes reflect her belief that properly aligning the body allows us to align with the universe and this alignment benefits both body and soul.  She offers students a slow flow of poses with an opportunity to slow down, stretch-out and re-connect with their innate goodness.  Wendy completed her yoga teacher training with Suzie Hurley at Willow Street Yoga Center in Takoma Park, MD in 2009. She is deeply grateful to the community at Willow Street for their support, encouragement and wisdom.</p>
            <p>Wendy holds a B.S. in Physical Education and is a certified Exercise Physiologist through the American College of Sports Medicine.  She has been teaching, training and coaching yoga, fitness and wellness since 2002.</p>
          </div>
        </section>
      </main>
    </>
  )
}