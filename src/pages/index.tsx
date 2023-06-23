import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
        <Image
          src="/dance.jpg"
          alt="Next.js Logo"
          width={0}
          height={0}
          sizes='33vh'
          style={{ width: '33.3333333333%', height: '100vh', objectFit: 'cover' }}
          priority
        />
        <Image
          src="/fitness-back-cropped.jpg"
          alt="Next.js Logo"
          width={0}
          height={0}
          sizes='33vh'
          style={{ width: '33.3333333333%', height: '100vh', objectFit: 'cover' }}
          priority
        />
        <Image
          src="/yoga-dancer-pose.jpg"
          alt="Next.js Logo"
          width={0}
          height={0}
          sizes='33vh'
          style={{ width: '33.3333333333%', height: '100vh', objectFit: 'cover' }}
          priority
        />

      </main>
    </>
  )
}
