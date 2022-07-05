import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components/cards/card/card'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>  
        <title>Frontend Mentor | Product preview card component</title>
      </Head>
      <main>        
        <Card/>
      </main>
     </>
  )
}

export default Home
