import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <div className="head-logo">
          <Image
            src="/logo.png"
            alt="Skydance Entertainment"
            width={200}
            height={100}
            priority
          />
        </div>

        <a href='/dance' className='home__link'>
          <h1>Dancing</h1>
          <Image
            src="/dance.jpg"
            alt="Dancing"
            width={0}
            height={0}
            sizes='33vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
        </a>
        <a href='/fitness' className='home__link'>
          <h1>Fitness</h1>
          <Image
            src="/fitness-back-cropped.jpg"
            alt="Fitness"
            width={0}
            height={0}
            sizes='33vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
        </a>
        <a href='/yoga' className='home__link'>
          <h1>Yoga</h1>
          <Image
            src="/yoga-dancer-pose.jpg"
            alt="Yoga"
            width={0}
            height={0}
            sizes='33vw'
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            priority
          />
        </a>

      </main>
    </>
  )
}
