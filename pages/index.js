// pages/index.js
import Head from 'next/head'
import Home from '../components/Home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Dayton Baldizón – Portfolio</title>
        <meta name="description" content="My personal portfolio" />
      </Head>
      <Home />
    </>
  )
}
