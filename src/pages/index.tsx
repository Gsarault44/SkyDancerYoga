import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <div className="head-logo">
          <Image
            src="/logo-white.png"
            alt="Skydance Entertainment"
            width={200}
            height={100}
            priority
            />
        </div>
        <div className="splash-row">
          <Link href='/fitness' className='home__link'>
            <h1>Fitness</h1>
            <Image
              src="/fitness-back-cropped.jpg"
              alt="Fitness"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
              />
          </Link>
          <Link href='/dance' className='home__link'>
            <h1>Dancing</h1>
            <Image
              src="/dance.png"
              alt="Dancing"
              width={4900}
              height={3200}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
          </Link>
          <Link href='/yoga' className='home__link'>
            <h1>Yoga</h1>
            <Image
              src="/yoga-dancer-pose.jpg"
              alt="Yoga"
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              priority
            />
          </Link>
        </div>
      </main>
    </>
  )
}
