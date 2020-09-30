import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Uses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Jarel Fryer | Uses</title>
      </Head>
      <div
        className={`min-h-screen px-4 md:px-0 sm:max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-7xl py-12 mx-auto flex flex-col font-sans antialiased ${
          isMenuOpen ? 'scrolling-auto overflow-hidden fixed inset-x-0' : ''
        }`}
      >
        <header>
          <nav className="flex items-center justify-between">
            <div className="uppercase text-xl md:text-2xl tracking-wide">
              <Link href="/">
                <a>
                  Jarel<span className="font-bold">Fryer</span>
                </a>
              </Link>
            </div>
            <ul className="hidden md:flex flex-row space-x-4 uppercase text-gray-500 font-semibold tracking-wide text-sm">
              <li>
                <Link href="/uses">
                  <a>Uses</a>
                </Link>
              </li>
              <li>Articles</li>
              <li>Work Journal</li>
            </ul>
            <button
              className="block md:hidden"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="block text-black h-6 w-6"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="block text-black h-6 w-6"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
        </header>
        <div
          className={`md:hidden bg-white z-30 fixed inset-0 mt-24 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="max-h-full md:flex flex-row space-y-4 px-4 uppercase text-gray-500 font-semibold tracking-wide text-lg">
            <li>
              <Link href="/uses">
                <a>Uses</a>
              </Link>
            </li>
            <li>Articles</li>
            <li>Work Journal</li>
          </ul>
        </div>
        <main>
          <section className="py-6 md:max-w-3xl mx-auto">
            <article className="text-center">
              <h1 className="uppercase font-bold text-4xl md:text-6xl leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-600">
                  My Uses
                </span>
              </h1>
              <div className="py-3 text-gray-500 text-lg space-y-2">
                <p>
                  Inspired by Wes Bos and Adam Wathan, I decided to add my own
                  /uses page. Check out{' '}
                  <a
                    className="font-semibold hover:font-bold hover:underline"
                    href="https://uses.tech"
                    target="_blank"
                  >
                    uses.tech
                  </a>{' '}
                  to see what people are using across the world in their daily
                  workflow.{' '}
                </p>
              </div>
            </article>
          </section>
          <section className="py-4">
            <h2 className="uppercase font-bold tracking-wide text-2xl">
              Tech Stack
            </h2>
            <article className="py-3 grid grid-cols-2 sm:grid-cols-6 justify-center items-center">
              <div className="justify-center flex">
                <svg width="100" height="100" viewBox="0 0 128 128">
                  <path
                    fill="#007acc"
                    id="original-2"
                    data-name="original"
                    className="cls-2"
                    d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"
                  ></path>
                </svg>
              </div>
              <div className="justify-center flex">
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-11.5 -10.23174 23 20.46348"
                >
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
              <div className="justify-center flex">
                <svg width="100" height="100" viewBox="0 0 128 128">
                  <path
                    fill="#83CD29"
                    d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                  ></path>
                </svg>
              </div>
              <div className="justify-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="100"
                  height="100"
                  viewBox="0 0 54 33"
                >
                  <g clipPath="url(#prefix__clip0)">
                    <path
                      fill="#14B4C6"
                      fillRule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="justify-center flex">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 148 90"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                    fill="#000"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <div className="justify-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  width="100"
                  height="100"
                  version="1.1"
                  viewBox="0 0 16 20"
                >
                  <title>storybook-icon/default</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <path
                      id="path-1"
                      d="M0.620279251,18.4293378 L0.000720094879,1.92089246 C-0.0197415137,1.37568327 0.398305374,0.913624829 0.942835893,0.879591672 L14.984425,0.00199234997 C15.5386921,-0.0326493419 16.016097,0.388590257 16.0507387,0.942857327 C16.0520438,0.963739972 16.0526969,0.984658267 16.0526969,1.00558166 L16.0526969,18.9944525 C16.0526969,19.549801 15.6024979,20 15.0471494,20 C15.0321047,20 15.017062,19.9996624 15.0020325,19.9989873 L1.58000252,19.3961612 C1.05726753,19.3726835 0.639903368,18.9522316 0.620279251,18.4293378 Z"
                    />
                  </defs>
                  <g
                    id="storybook-icon/default"
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <mask id="mask-2" fill="#fff">
                      <use href="#path-1" />
                    </mask>
                    <use
                      id="path1_fill-path"
                      fill="#FF4785"
                      fillRule="nonzero"
                      href="#path-1"
                    />
                    <path
                      id="path2_fill-path"
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M11.8537041,2.4583186 L11.9496157,0.15151183 L13.8779482,0 L13.9610222,2.37893005 C13.9639134,2.46172229 13.8991408,2.53118243 13.8163485,2.53407359 C13.780898,2.53531156 13.7461558,2.52394606 13.7182911,2.50199528 L12.9746642,1.91619251 L12.094228,2.584057 C12.0282261,2.63412351 11.934134,2.62120528 11.8840675,2.55520331 C11.862992,2.52741977 11.8522554,2.49316117 11.8537041,2.4583186 Z"
                      mask="url(#mask-2)"
                    />
                    <path
                      id="path9_fill-path"
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M9.38755179,7.53827354 C9.38755179,7.92949033 12.0227349,7.74199033 12.376485,7.4671875 C12.376485,4.80309448 10.9469952,3.40315552 8.32935804,3.40315552 C5.71172085,3.40315552 4.24510144,4.82487559 4.24510144,6.95745682 C4.24510144,10.6717025 9.25759817,10.7427885 9.25759817,12.7687407 C9.25759817,13.337429 8.97912613,13.6750877 8.36648764,13.6750877 C7.56820113,13.6750877 7.25259948,13.2673973 7.28972909,11.8812195 C7.28972909,11.5805064 4.24510144,11.4867564 4.15227743,11.8812195 C3.91590969,15.2404217 6.0087577,16.2093445 8.40361725,16.2093445 C10.7242176,16.2093445 12.5435683,14.9724079 12.5435683,12.7331976 C12.5435683,8.75237935 7.45681231,8.85900841 7.45681231,6.88637078 C7.45681231,6.08665282 8.050886,5.98002376 8.40361725,5.98002376 C8.7749133,5.98002376 9.4432462,6.04546668 9.38755179,7.53827354 Z"
                      mask="url(#mask-2)"
                    />
                  </g>
                </svg>
              </div>
            </article>
          </section>
          <section className="py-4">
            <h2 className="uppercase font-bold tracking-wide text-2xl">
              Currently Learning
            </h2>
            <article className="py-3 grid grid-cols-2 sm:grid-cols-6 justify-center items-center">
              <div className="justify-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 444 453"
                >
                  <path
                    fill="#FF2D20"
                    d="M357.38,149.42c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39
	c-0.13-0.17-0.24-0.36-0.39-0.51c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0
	l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37
	c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68
	c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v57.36l-43.71,25.17V120.87c0-0.39-0.05-0.77-0.15-1.14
	c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39c-0.13-0.17-0.24-0.36-0.39-0.51
	c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0
	l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51
	c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v179.66
	c0,1.56,0.84,3.01,2.19,3.79l104.91,60.4c0.23,0.13,0.48,0.21,0.72,0.3c0.11,0.04,0.22,0.11,0.34,0.14c0.37,0.1,0.74,0.15,1.12,0.15
	s0.75-0.05,1.12-0.15c0.1-0.03,0.19-0.09,0.29-0.12c0.26-0.09,0.52-0.18,0.76-0.31l104.91-60.4c1.36-0.78,2.19-2.22,2.19-3.79
	v-57.36l50.26-28.94c1.36-0.78,2.19-2.22,2.19-3.79v-59.89C357.53,150.17,357.47,149.79,357.38,149.42z M195.78,295.5l-43.63-24.69
	l45.82-26.38c0,0,0,0,0,0l50.27-28.94l43.67,25.14l-32.04,18.29L195.78,295.5z M296.33,183.29v49.8l-18.36-10.57l-25.36-14.6v-49.8
	l18.36,10.57L296.33,183.29z M300.7,125.4l43.69,25.16l-43.69,25.16l-43.69-25.16L300.7,125.4z M166.07,252.72l-18.36,10.57V153.6
	l25.36-14.6l18.36-10.57v109.68L166.07,252.72z M143.34,95.72l43.69,25.16l-43.69,25.16l-43.69-25.16L143.34,95.72z M95.25,128.43
	L113.61,139l25.36,14.6v117.24c0,0,0,0.01,0,0.01s0,0.01,0,0.01c0,0.17,0.05,0.33,0.07,0.49c0.03,0.21,0.03,0.43,0.09,0.64
	c0,0,0,0.01,0,0.01c0.05,0.17,0.14,0.33,0.21,0.49c0.08,0.18,0.13,0.38,0.23,0.55c0,0,0,0.01,0.01,0.01
	c0.09,0.15,0.22,0.28,0.33,0.42c0.12,0.16,0.22,0.32,0.36,0.46c0,0,0.01,0.01,0.01,0.01c0.12,0.12,0.28,0.21,0.42,0.32
	c0.16,0.12,0.3,0.26,0.47,0.36c0.01,0,0.01,0,0.02,0.01c0.01,0,0.01,0.01,0.02,0.01l50.24,28.43v50.29L95.25,298V128.43z
	 M296.33,298l-96.17,55.37v-50.3l71.22-40.66l24.95-14.24V298z M348.78,207.92l-43.71,25.17v-49.8l25.36-14.6l18.36-10.57V207.92z"
                  />
                </svg>
              </div>
              <div className="justify-center flex">
                <svg width="100" height="100" viewBox="0 0 128 128">
                  <path
                    d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
                    fill="none"
                  ></path>
                  <path
                    d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
                    fill="#35495e"
                  ></path>
                  <path
                    d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
                    fill="#41b883"
                  ></path>
                </svg>
              </div>
            </article>
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <section className="py-4">
              <h2 className="uppercase font-bold tracking-wide text-2xl">
                Software/Apps
              </h2>
              <p className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-lg text-gray-600 py-2">
                <ul className="space-y-1 list-disc">
                  <li>Visual Studio Code</li>
                  <li>Clubhouse</li>
                  <li>Basecamp 3</li>
                  <li>Hyper Terminal</li>
                </ul>
                <ul className="space-y-1 list-disc">
                  <li>Google Chrome</li>
                  <li>Adobe XD (Work)</li>
                  <li>Figma (Personal)</li>
                  <li>Sizzy</li>
                </ul>
                <ul className="space-y-1 list-disc">
                  <li>Termius</li>
                  <li>Magnet</li>
                  <li>Bumpr</li>
                  <li>Discord</li>
                </ul>
                <ul className="space-y-1 list-disc">
                  <li>Slack</li>
                  <li>Zoom</li>
                </ul>
              </p>
            </section>
            <section className="py-4">
              <h2 className="uppercase font-bold tracking-wide text-2xl">
                Workstation
              </h2>
              <p className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-lg text-gray-600 py-2">
                <ul className="space-y-1 list-disc">
                  <li>
                    MacBook Pro 16-inch, 2019
                    <ul className="pl-4 space-y-1 list-disc">
                      <li>2.6 GHz 6-Core Intel Core i7</li>
                      <li>16 GB 2667 MHz DDR4</li>
                      <li>AMD Radeon Pro 5300M 4 GB</li>
                      <li>500GB Storage</li>
                    </ul>
                  </li>
                </ul>
                <ul className="space-y-1 list-disc">
                  <li>LG 32` Curved Monitor</li>
                  <li>Apple Magic Mouse</li>
                  <li>Logitech MX Keys</li>
                  <li>Autonomous Desk 2</li>
                  <li>Apple AirPods</li>
                  <li>A Nice Office Chair</li>
                </ul>
              </p>
            </section>
          </div>
        </main>
        <footer className="text-center text-gray-500">
          <span>Jarel Fryer &copy; 1996 - {new Date().getFullYear()}</span>
        </footer>
      </div>
    </>
  )
}
