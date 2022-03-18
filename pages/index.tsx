import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://destroyallweb.com">Destroy All Web</a>
        </h1>

        <p className={styles.description}>
          Creating attack{' '}
          <code className={styles.code}>loading...</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://daniiel.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            Daniiel Pedersen
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
