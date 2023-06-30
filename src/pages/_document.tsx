import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <header className="header">
          <div>
            <nav>
              <Link href="/fitness">
                Fitness
              </Link>
              <Link href="/dance">
                Dance
              </Link>
              <Link href="/yoga">
                Yoga
              </Link>
            </nav>
            <div className="head-logo">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Skydance Entertainment"
                  width={250}
                  height={100}
                  priority
                />
              </Link>
            </div>
          </div>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
