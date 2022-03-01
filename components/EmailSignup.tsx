export default function EmailSignup() {
  return (
    <aside className="mx-auto max-w-3xl py-16 text-center">
      <div className="squiggle mb-8 w-full border-t-2 border-black"></div>
      <h3 className="font-display text-4xl font-bold uppercase leading-none">
        Subscribe to the newsletter
      </h3>
      <div className="flex justify-center">
        <iframe
          src="https://howtocode.substack.com/embed"
          width="480"
          height="320"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </aside>
  )
}
