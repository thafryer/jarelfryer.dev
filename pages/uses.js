import { useState } from 'react'
import Head from 'next/head'
import { Header, Footer, UsesContent } from '../components'

export default function Uses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Jarel Fryer | Uses</title>
        <meta
          name="description"
          content="Hi, I'm Jarel, a full stack developer from the US with a passion for building and innovation."
        />
      </Head>
      <div
        className={`min-h-screen px-4 md:px-0 sm:max-w-2xl lg:max-w-3xl xl:max-w-7xl py-12 mx-auto flex flex-col font-sans antialiased ${
          isMenuOpen ? 'scrolling-auto overflow-hidden fixed inset-x-0' : ''
        }`}
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <UsesContent />
        </main>
        <Footer />
      </div>
    </>
  )
}
