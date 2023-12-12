import { useEffect, useState } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';


const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })
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

  return (
    <>
      <style jsx global>{`
        html nav * {
          font-family: ${inter.style.fontFamily};
        }
        html body * {
          font-family: ${pop.style.fontFamily};
          font-weight: 200;
        }
      `}</style>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
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
            <div>
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
              <Link href="https://sky-dancer-fitness.vercel.app/">
                Fitness
              </Link>
              <Link href="https://sky-dancer.vercel.app/dance">
                Entertainment
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Copyright &copy; {currentYear} SkydancerEntertainment - All Rights Reserved.</p>
      </footer>
    </>
  )
}
