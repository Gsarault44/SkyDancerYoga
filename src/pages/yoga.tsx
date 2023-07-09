import Head from 'next/head'
import Image from 'next/image'

export default function Yoga() {
  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="yoga">
          <p>
            yoga
          </p>          
          <Image
            className="logo"
            src="/yoga-logo.png"
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
          />
      </main>
    </>
  )
}
