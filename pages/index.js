import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Footer, Header } from '../components'

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime()
  var age_dt = new Date(diff_ms)

  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Jarel Fryer | Home</title>
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
          <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
              <div
                className="relative h-full text-lg max-w-prose mx-auto"
                aria-hidden="true"
              >
                <svg
                  className="absolute top-12 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                  />
                </svg>
                <svg
                  className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                  />
                </svg>
                <svg
                  className="absolute bottom-12 left-full transform translate-x-32"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                >
                  <defs>
                    <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                  />
                </svg>
              </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="prose prose-blue prose-lg text-gray-500 mx-auto prose-a:text-blue-600 hover:prose-a:text-blue-500">
                <h1>
                  <span className="block text-lg text-blue-600 font-semibold tracking-wide uppercase">
                    Hello,
                  </span>
                  <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    I'm Jarel
                  </span>
                </h1>
                <div className="flex py-3 space-x-4 text-gray-400">
                  <a
                    href="https://twitter.com/thafryer"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
                      />
                    </svg>
                    <span class="sr-only">My Twitter</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jarel-fryer/"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <path
                        fill="currentColor"
                        d="M21.6,0 L0.988235294,0 C0.423529412,0 0,0.418546713 0,0.976608997 L0,21.4853979 C0,21.9039446 0.423529412,22.3224913 0.988235294,22.3224913 L21.7411765,22.3224913 C22.3058824,22.3224913 22.7294118,21.9039446 22.7294118,21.3458824 L22.7294118,0.976608997 C22.5882353,0.418546713 22.1647059,0 21.6,0 Z M6.63529412,18.9741176 L3.38823529,18.9741176 L3.38823529,8.37093426 L6.77647059,8.37093426 L6.77647059,18.9741176 L6.63529412,18.9741176 Z M5.08235294,6.97577855 C3.95294118,6.97577855 3.10588235,5.99916955 3.10588235,5.02256055 C3.10588235,3.90643599 3.95294118,3.06934256 5.08235294,3.06934256 C6.21176471,3.06934256 7.05882353,3.90643599 7.05882353,5.02256055 C6.91764706,5.99916955 6.07058824,6.97577855 5.08235294,6.97577855 Z M19.2,18.9741176 L15.8117647,18.9741176 L15.8117647,13.8120415 C15.8117647,12.5564014 15.8117647,11.0217301 14.1176471,11.0217301 C12.4235294,11.0217301 12.1411765,12.4168858 12.1411765,13.8120415 L12.1411765,19.1136332 L8.75294118,19.1136332 L8.75294118,8.37093426 L12,8.37093426 L12,9.76608997 C12.4235294,8.92899654 13.5529412,8.09190311 15.1058824,8.09190311 C18.4941176,8.09190311 19.0588235,10.3241522 19.0588235,13.1144637 L19.0588235,18.9741176 L19.2,18.9741176 Z"
                      />
                    </svg>
                    <span class="sr-only">My LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/thafryer"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"
                      />
                    </svg>
                    <span class="sr-only">My Github</span>
                  </a>
                  <a className="font-semibold" href="/resume.pdf">
                    Resume
                  </a>
                </div>
                <div className="py-3 space-y-4 text-lg text-gray-500">
                  <p>
                    I'm a full stack developer from the US 🇺🇸. I currently work
                    as a Software Engineer at{' '}
                    <a
                      className="font-semibold"
                      href="https://www.commonbond.co/"
                      target="_blank"
                      rel="noopener"
                    >
                      CommonBond
                    </a>
                    .
                  </p>
                  <p>
                    I am {calculate_age(new Date(1996, 12, 18))} years old and
                    have been creating really cool software for the web since
                    2016, using a modern technologies such as: React, Node.JS,
                    and TailwindCSS.
                  </p>
                  <p>
                    Want to know what tools I use? Go check out my{' '}
                    <Link href="/uses">
                      <a className="font-semibold text-gray-700 hover:font-bold hover:underline">
                        uses!
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="relative" style={{ paddingTop: '70%' }}>
                  <div className="absolute inset-0">
                    <img
                      className="object-cover object-top w-full h-full rounded-lg"
                      style={{ objectPosition: '40% 25%' }}
                      src="/Jarel_Current.jpg"
                      alt="Jarel Fryer, The Full Stack Developer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
