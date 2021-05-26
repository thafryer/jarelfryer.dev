import { useState } from 'react'
import Head from 'next/head'
import { Header, Footer, PageContent, WorkJournalContent } from '../components'

export default function WorkJournal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Jarel Fryer | Work Journal</title>
      </Head>
      <div
        className={`min-h-screen px-4 md:px-0 sm:max-w-2xl lg:max-w-3xl xl:max-w-7xl py-12 mx-auto flex flex-col font-sans antialiased ${
          isMenuOpen ? 'scrolling-auto overflow-hidden fixed inset-x-0' : ''
        }`}
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <WorkJournalContent />
        </main>
        <Footer />
      </div>
    </>
  )
}
