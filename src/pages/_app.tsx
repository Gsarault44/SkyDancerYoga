import React from 'react';
import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Script from 'next/script'
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const pop = Poppins({ weight: ["300", "500"], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const router = useRouter();
  const currentYear = new Date().getFullYear();  


  const [anchorTarget, setAnchorTarget] = useState(null);
  const [menuStatus, setMenuStatus] = useState(false);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
      setAnchorTarget(document.getElementById('about'));
  }, []);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push('/#about', undefined, { shallow: true })
    setMenuStatus(false)
    anchorTarget && anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setMenuStatus(false); // Close the navigation panel
  }, [ pathname ]);

  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
 const [open, setOpen] = useState(true);


  return (
    <>
      <style jsx global>{`
        html body * {
          font-family: ${pop.style.fontFamily};
          font-weight: 200;
        }
      `}</style>
      <Head>
        <meta name="description" content="Transformative yoga experience."/>

        <meta property="og:url" content="https://sky-dancer-yoga.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Skydancer yoga"/>
        <meta property="og:description" content="Transformative yoga experience."/>
        <meta property="og:image" content="/dancer.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="sky-dancer-yoga.vercel.app"/>
        <meta property="twitter:url" content="https://sky-dancer-yoga.vercel.app/"/>
        <meta name="twitter:title" content="Skydancer yoga"/>
        <meta name="twitter:description" content="Transformative yoga experience."/>
        <meta name="twitter:image" content="/dancer.jpg"/>
      </Head>
      <header className={`header ${router.pathname == '/' && 'home'} ${scroll ? 'bg-black' : ''}` }>
        <div>
          <div className="menu-button">
            <Link href="/" className="logo">
              <Image
                src="/yoga-logo.png"
                alt="Skydance Entertainment"
                width={100}
                height={50}
                priority
              />
            </Link>
            <Image
              src={`${menuStatus ? '/close.svg' : '/menu-svgrepo-com.svg'}`}
              alt='menu Icon'
              onClick={() => setMenuStatus(!menuStatus)}
              width={30}
              height={30}
            />
          </div>
          <nav className={`${menuStatus ? 'nav-open' : 'nav-closed'}`}>
            <Link href="/" className="logo">
              <Image
                src="/yoga-logo.png"
                alt="Skydance Entertainment"
                width={200}
                height={100}
                priority
              />
            </Link>
            <div className="header-links">
              <div className="header-links-group">
                <Link href="/" onClick={handleClick}>
                  About
                </Link>
                <Link href="/retreats">
                  Retreats
                </Link>
                <Link href="/classes">
                  Classes
                </Link>
                <Link href="/blog">
                  Blog
                </Link>
              </div>
              <div className="header-links-ext">
                <Link href="https://www.skydancerfitness.com/" className="fitness">
                  <Image
                    src="/fitness.png"
                    alt="SkyDancer Fitness"
                    width={120}
                    height={60}
                  />
                </Link>
                <Link href="https://www.skydancerentertainment.com/" className="ent">
                  <Image
                    src="/logo.png"
                    alt="SkyDancer Entertainment"
                    width={120}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className={`${open ? 'pop-card open': 'pop-card'} `}>
        <button className='pop-card-close' onClick={() => setOpen(false)}>X</button>
        <Image
          src="/belize/pool-ocean.jpg"
          alt="Over looking a pool"
          width={376}
          height={320}
        />
        <p>Escape the hustle and bustle of everyday life and embark on a transformative journey with our rejuvenating yoga retreats.</p>
        <a className="wtrvl-checkout_button button" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.3" data-uid="1154190" data-uuid="83061662" href="https://www.wetravel.com/checkout_embed?uuid=83061662" target="_blank">Book Now</a> 
        <Script src="https://cdn.wetravel.com/widgets/embed_checkout.js"></Script>
      </div>
      <Component {...pageProps} />
      <footer>
        <p>Copyright &copy; {currentYear} SkydancerEntertainment - All Rights Reserved.</p>
      </footer>
    </>
  )
}
