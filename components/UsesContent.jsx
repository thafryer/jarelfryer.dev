export const UsesContent = () => {
  return (
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
        <div className="text-lg max-w-prose prose-blue mx-auto">
          <h1>
            <span className="block text-base text-blue-600 font-semibold tracking-wide uppercase">
              My
            </span>
            <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Uses
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Inspired by Wes Bos and Adam Wathan, I decided to add my own /uses
            page. I think it's a cool way to learn more about developers and
            their preferences. Check out{' '}
            <a href="https://uses.tech" target="_blank">
              uses.tech
            </a>{' '}
            to see what developers are using across the world in their daily
            workflow.
          </p>
        </div>
        <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          <h2>Workstation</h2>
          <Workstation />
          <h2>Development</h2>
          <Development />
        </div>
      </div>
    </div>
  )
}

const Workstation = () => (
  <ul>
    <li>
      My desk is an{' '}
      <a href="https://www.autonomous.ai/standing-desks" target="_blank">
        Autonomous Standing Desk
      </a>
      . I really love my desk and it definitely helps improve my productivity!
      🔥
    </li>
    <li>
      My main monitor is 32" Samsung Curved monitor. I got it on sale at Sam's
      Club. 🖥
    </li>
    <li>I use a normal desk chair. Nothing too fancy about it. 😁</li>
    <li>For work, I use a Macbook Pro. 💻</li>
    <li>
      For personal stuff, I use a{' '}
      <a href="https://www.apple.com/shop/buy-mac/macbook-air/space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb">
        2020 13" Macbook Air Apple M1 with 8-core CPU and 8-core GPU with 8GB
        memory
      </a>
      . 💻
    </li>
    <li>My mouse is an Apple Magic Mouse 2. 🖱</li>
    <li>
      The keyborad is a{' '}
      <a
        href="https://www.logitech.com/en-us/products/keyboards/mx-keys-wireless-keyboard.920-009294.html#buy-mx-keys-wireless-keyboard"
        target="_blank"
      >
        Logitech MX Keys
      </a>
      . ⌨️
    </li>
    <li>
      For Connecting all of my peripherals, I use a{' '}
      <a
        href="https://www.hypershop.com/collections/all/products/new-2020-hyperdrive-duo-7-in-2-usb-c-hub"
        target="_blank"
      >
        HYPERDRIVE DUO 7-in-2 USB-C Hub
      </a>
    </li>
    <li>
      I also use a{' '}
      <a href="https://www.amazon.com/Quartet-Whiteboard-Desktop-Computer-GDP186/dp/B01M2DADUX/ref=asc_df_B01M2DADUX/?tag=hyprod-20&linkCode=df0&hvadid=167138897271&hvpos=&hvnetw=g&hvrand=18388470606216047487&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9013059&hvtargid=pla-314609211989&psc=1">
        Quartet Desktop Computer pad
      </a>{' '}
      for note taking and quick reminders.
    </li>
  </ul>
)

const Development = () => (
  <ul>
    <li>
      My favorite editor for development is VS Code. I love the integrated
      terminal and the communit support behind it. I am currently using the{' '}
      <a
        href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
        target="_blank"
      >
        Github Dark Dimmed
      </a>{' '}
      theme and love it.
    </li>
    <li>
      I use{' '}
      <a href="https://www.jetbrains.com/lp/mono/" target="_blank">
        Jetbrains Mono
      </a>{' '}
      as my editor font. I love the uniqueness and ligatures of this font in my
      editor.
    </li>
    <li>
      For all of my SQL development, I use DataGrip at work and TablePlus for
      personal projects.
    </li>
    <li>
      I do not have a favorite web browser. I tend to use all of the Big 3
      (Chrome, Firefox & Safari). However, for responsive design development, I
      use{' '}
      <a href="https://sizzy.co/" target="_blank">
        Sizzy
      </a>
      .
    </li>
    <li>
      Currently, I host all my sites and applications (mainly use React/
      <a href="https://nextjs.org/">NextJS</a>) on{' '}
      <a href="https://vercel.com/" target="_blank">
        Vercel
      </a>
      . Lately, I've been using <a href="https://supabase.io/">supabase</a> as a
      hosted database service for my personal projects.
    </li>
  </ul>
)

export default UsesContent
