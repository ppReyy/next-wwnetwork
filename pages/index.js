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
          I'm creator of <code>wiangwaiHub</code>          
        </p>
        <Link href="https://kokira.app/wwnetwork">  
          <a>On Android</a>
           </Link>
        
        <Link href="https://kokira.app/wwnetwork">  
          <a>On iOS</a>
           </Link>
    

        
      </main>

      <Footer />
    </div>
  )
}
