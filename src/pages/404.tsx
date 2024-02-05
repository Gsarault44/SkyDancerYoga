import { useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Urbanist } from 'next/font/google'

import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] })

export default function Dance() {

  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.className} 404`}>
        <div className="missing">
          <h1>Looks like our website did a yoga pose and got stuck. Apologies for the twist! Head back to the <Link href="/">homepage</Link> for a smoother flow. Namaste.</h1>
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
