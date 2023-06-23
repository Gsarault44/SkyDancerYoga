import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@styles/app.scss';
import { Nanum_Gothic } from 'next/font/google'

const inter = Nanum_Gothic({ weight: "400", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
