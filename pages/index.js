import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rattanachai's Arc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My name is Rattanachai" />
        <p className="description">
          I have my own application name <code>wiangwaiHub</code>          
        </p>

        <Link href="https://nextjs.org">  
          <a>Next.js</a>
           </Link>
    

        
      </main>

      <Footer />
    </div>
  )
}
