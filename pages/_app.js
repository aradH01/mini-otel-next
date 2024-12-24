import '../styles/globals.css'

if (typeof window !== 'undefined') {
  import('../utils/initOpenTelemetry');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
