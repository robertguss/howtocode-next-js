import { AppProps } from "next/app"
import "../styles/tailwind.css"
import "../styles/global.css"
import "focus-visible"
import * as ga from "@/utils/ga"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { AudioProvider } from "@/components/Podcast/AudioProvider"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  )
}

export default MyApp
