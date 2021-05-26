import Link from 'next/link'

const Links = () => (
  <>
    <li>
      <Link href="/uses">
        <a>Uses</a>
      </Link>
    </li>
    {/* <li>Blog</li> */}
    <li>
      <Link href="/work-journal">
        <a>Work Journal</a>
      </Link>
    </li>
  </>
)
export const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <>
    <header>
      <nav className="flex items-center justify-between">
        <div className="text-xl tracking-wide uppercase md:text-2xl">
          <Link href="/">
            <a>
              Jarel<span className="font-bold">Fryer</span>
            </a>
          </Link>
        </div>
        <ul className="flex-row hidden space-x-4 text-sm font-semibold tracking-wide text-gray-500 uppercase md:flex">
          <Links />
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
              className="block w-6 h-6 text-black"
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
              className="block w-6 h-6 text-black"
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
      <ul className="flex-row max-h-full px-4 space-y-4 text-lg font-semibold tracking-wide text-gray-500 uppercase md:flex">
        <Links />
      </ul>
    </div>
  </>
)
