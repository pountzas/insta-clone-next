import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        this is the end~!
      </h1>
      {/* Header */}
      <Header />
      {/* Feed */}
      {/* modal */}
    </div>
  )
}
