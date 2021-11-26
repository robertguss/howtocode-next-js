import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "../styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
