import Head from 'next/head'
import { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    // Load Decap CMS script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  )
}