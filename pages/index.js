import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { posts } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Create Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <strong style={{ padding: '6px' }}>Blog World</strong>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Share Your thoughts with everyone</code>
        </p>

        <div>
          <Layout posts={posts} />
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by
        <strong style={{ padding: '6px' }}>Abhishek Kadiwala</strong>
      </footer>
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/api/blogposts')

  const posts = await res.json()

  return {
    props: { posts }
  }
}
