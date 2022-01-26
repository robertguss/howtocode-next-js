export default function PageHeader({ title, description }) {
  return (
    <header className="content mx-auto max-w-xl text-center">
      <h1 className="mb-4" data-test="header-title">
        {title}
      </h1>
      <p data-test="header-description">{description}</p>
    </header>
  )
}
