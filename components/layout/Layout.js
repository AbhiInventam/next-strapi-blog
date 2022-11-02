import { useRouter } from 'next/router'
import styles from './Layout.module.css'

const Layout = ({ posts }) => {
  const { data } = posts
  const router = useRouter()

  const getURL = (item) => {

    let url = 'blogpost/' + item.id
    // return url

    return router.push(url)

  }

  return (
    <>
      {data &&
        data.map((item, index) => (
          // <div key={index} className={styles.grid} onClick={() => window.open(getURL(item), "_blank")}> // open in new page
          <div key={index} className={styles.grid} onClick={() => getURL(item)} >
            <a className={styles.card}>
              <h2>{item.attributes.title}</h2>
              <p>{item.attributes.description}</p>
            </a>
          </div>
        ))
      }
    </>
  )
}

export default Layout




