import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My name is Rattanachai" />
        <p className="description">
          I have my own application name <code>wiangwaiHub</code> 
        </p>
        <Header title="On iOS and Android" />
        <p className="description">
          I have my own application name <code>wiangwaiHub</code> 
        </p>
        
      </main>

      <Footer />
    </div>
  )
}
