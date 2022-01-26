import Squiggle from "./Squiggle"
import Social from "./Social"

export default function Footer() {
  return (
    <>
      <footer className="py-6 text-center lg:py-12">
        <div className="text-sm" data-test="footer-text">
          &copy;
          {new Date().getFullYear()} How To Code &amp; Robert Guss
        </div>
        <Social />
      </footer>

      <Squiggle />
    </>
  )
}
