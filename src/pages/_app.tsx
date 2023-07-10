import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic } from 'next/font/google'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        html * {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <header className={`header ${router.pathname == '/' && 'home'}`}>
        <div>
          <nav>
            <Link href="/about">
              About
            </Link>
            <Link href="/blog">
              Blog
            </Link>
            <Link href="/classes">
              Classes
            </Link>
            <Link href="https://sky-dancer.vercel.app/  ">
              <Image
                src="/yoga-logo.png"
                alt="Skydance Entertainment"
                width={250}
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
    </>
  )
}
