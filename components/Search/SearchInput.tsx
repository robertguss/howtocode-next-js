export default function SearchInput() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-3 py-8">
        <div className="searchBoxContainer">
          <input
            type="text"
            id="searchBox"
            className="block w-full rounded-md border bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
            placeholder="Search..."
            data-test="search-input"
          />
        </div>

        <div id="searchResults" className="searchResults lg:pl-8"></div>
      </section>
    </>
  )
}
