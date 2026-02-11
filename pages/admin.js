import Head from 'next/head'
import { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    // Dynamically load Decap CMS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="nc-root"></div>
    </>
  )
}