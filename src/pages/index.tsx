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
      </main>
    </>
  )
}