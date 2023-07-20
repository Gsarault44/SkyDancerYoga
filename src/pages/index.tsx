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
    autoplaySpeed: 2500,
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
              <h1 className="slider-text">“Dance  in the sky, simply for the delight of it and become one with it all”</h1>
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
              <h1 className="slider-text">“I have been attending Wendy’s classes for many years.   In every class, I feel like I learn something new.  My brain and my muscles both get a work out! </h1>
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
              <h1>“One of many reasons that I keep attending Wendy’s classes is because she listens so well to each of us in class.   She will modify exercises so it fits with what issues or concerns everyone in the class has. It feels like it is one on one attention in a class!“&nbsp;<span>—Beth C.</span></h1>
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
              <h1 className="slider-text">“Wendy is a gifted yoga instructor -- enthusiastic and encouraging -- who has a huge repertoire of moves she adapts to any student level. As someone who has taken her classes for more than 10 years, I remain awed by her creativity and energy.”&nbsp;<span>—Marilyn M.</span></h1>  
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
                src="/waterfall.jpg"
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
            src="/hero/wendy-yoga-3.jpg"
            alt="Fitness"
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
          <div className="about__content">
            <h1>Wendy Christensen</h1>
            <h2>Yoga Instructor, ACSM Certified Exercise Physiologist </h2>
            <p>Wendy’s fascination with the human body began at an early age as a dancer. She still marvels at the sophisticated design of the human body and seeks to teach her students practical tools to enhance their life journey both physically and spiritually.</p>
            <p>Wendy’s classes reflect her belief that properly aligning the body allows energy to flow more easily, relieves pain and builds strength. She offers students a slow flow of poses with an opportunity to slow down, stretch-out and re-connect with their innate goodness. Wendy completed her yoga teacher training with Suzie Hurley at Willow Street Yoga Center in Takoma Park, MD. She is deeply grateful to the community at Willow Street for their support, encouragement and wisdom.</p>
            <p>Wendy holds a B.S. in Physical Education and is a certified Exercise Physiologist through the American College of Sports Medicine. She is currently the Fitness Director for Georgetown University Law Center.</p>
          </div>
        </section>
        <section className="home-retreats">
          <div className="home-retreats__inner">
            <h2>Join us on a retreat</h2>
            <p>Embark on a soul-renewing journey at a stunning resort. Join our destination yoga class amidst breathtaking vistas and tranquil beaches. Reconnect with your inner self, guided by experienced instructors. Experience transformative moments of self-discovery and blissful connections with like-minded souls. Unwind, rejuvenate, and elevate your well-being in paradise. Come, find serenity and enchantment at our destination yoga retreat.</p>
            <Link href="/retreats" className="button">
              Show me more
            </Link>
          </div>
        </section>
        <section className="home-classes">
          <div className="home-classes__inner">
            <Image
              src="/dominica/warrior-II.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ height: 'auto', objectFit: 'cover' }}
              priority
            />
            <div>
              <h2>Transformative yoga experience awaits you.</h2>
              <p>Discover the transformative power of yoga at our studio. Nurture your body and mind with invigorating sessions led by skilled instructors. Embrace inner peace, strength, and clarity as you harmonize breath and movement. Join our welcoming community and unlock your limitless potential. Elevate your life through the practice of yoga.</p>
              <Link href="/retreats" className="button">
                Sign me up
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}