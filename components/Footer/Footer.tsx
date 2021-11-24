import Script from "next/script"
import Squiggle from "./Squiggle"
import Social from "./Social"

export default function Footer() {
  return (
    <>
      <footer className="py-6 lg:py-12 text-center">
        <div className="text-sm" data-test="footer-text">
          &copy;
          {new Date().getFullYear()} How To Code &amp; Robert Guss
        </div>
        <Social />
      </footer>

      <Squiggle />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"></Script>
    </>
  )
}
