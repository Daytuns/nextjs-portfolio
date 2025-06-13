// pages/vibehex/index.js
import Head from 'next/head'
import VibeHex from '@/components/VibeHex'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Dayton Baldizón – Vibehex</title>
        <meta name="description" content="Vibehex - AI Color Palette Generator by Dayton Baldizón" />
      </Head>
      <VibeHex />
    </>
  )
}
