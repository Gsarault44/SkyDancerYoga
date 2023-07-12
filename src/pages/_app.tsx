import { useEffect, useState } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic, Poppins } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })
const pop = Poppins({ weight: ["200", "500"], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();  


  const [anchorTarget, setAnchorTarget] = useState(null);

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
  const handleClick = event => {
    event.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          <nav>
            <Link href="#about" onClick={handleClick}>
              About
            </Link>
            <Link href="/blog">
              Blog
            </Link>
            <Link href="/classes">
              Classes
            </Link>
            <Link href="/" className="logo">
              <Image
                src="/yoga-logo.png"
                alt="Skydance Entertainment"
                width={200}
                height={100}
                priority
              />
            </Link>
            <Link href="#">
              Fitness
            </Link>
            <Link href="https://sky-dancer.vercel.app/dance">
              Entertainment
            </Link>
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
