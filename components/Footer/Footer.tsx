import slugify from "slugify"

import Squiggle from "./Squiggle"

const navigation = {
  main: [
    { name: "Free Books", href: "/books" },
    { name: "Articles", href: "/posts" },
    { name: "Podcast", href: "/podcast" },
    { name: "Courses", href: "/courses" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Newsletter", href: "/newsletter" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/howtocode_io",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/howtocode_io",
      icon: (props) => (
        <svg
          className="h-6 w-6 hover:text-hot-pink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)">
            <path
              d="M20.06,3.5H3.94C1.764,3.5,0,5.264,0,7.44v9.12c0,2.176,1.764,3.94,3.94,3.94c0,0,0,0,0,0h16.12 c2.176,0,3.94-1.764,3.94-3.94l0,0V7.44C24,5.264,22.236,3.5,20.06,3.5L20.06,3.5z M16.54,12l-6.77,4.36 c-0.232,0.149-0.542,0.082-0.691-0.151C9.028,16.129,9,16.035,9,15.94V7.28c0-0.276,0.225-0.5,0.501-0.499 c0.095,0,0.189,0.028,0.269,0.079l6.77,4.33c0.232,0.15,0.299,0.459,0.149,0.691c-0.038,0.06-0.089,0.11-0.149,0.149V12z"
              stroke="none"
              fill="currentColor"
              strokeWidth="0"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/robertguss",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:howtocode@pm.me",
      icon: (props) => (
        <svg
          className="h-6 w-6 hover:text-hot-pink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          &gt;
          <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)">
            <path
              d="M 2.25,4.5h19.5c0.828,0,1.5,0.672,1.5,1.5v12c0,0.828-0.672,1.5-1.5,1.5H2.25c-0.828,0-1.5-0.672-1.5-1.5V6 C0.75,5.172,1.422,4.5,2.25,4.5z "
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 15.687,9.975L19.5,13.5 "
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 8.313,9.975L4.5,13.5 "
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 22.88,5.014l-9.513,6.56 c-0.823,0.568-1.911,0.568-2.734,0L1.12,5.014"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-white" data-test="footer">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                  data-test={`footer-link-${slugify(item.name, {
                    lower: true,
                  })}`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} How To Code &amp; Robert Guss
          </p>
        </div>
      </footer>
      <Squiggle />
    </>
  )
}
