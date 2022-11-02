import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import * as allImages from '@/src/allImages';
import styles from './blogspot.module.css'

const Blogpost = (props) => {
  const { data } = props

  return (<div>
    {data &&
      <div className={styles.postContainer}>
        <div>
          <Link href={`/`}>
            <img src={allImages.BackBtnImg} alt={'Go Back'} width={50} height={30} />
          </Link>
        </div>
        <div className={styles.postContent}>
          <h1>{data.attributes.title}</h1>
          <p>{data.attributes.description}</p>
        </div>
      </div>
    }
  </div>
  )
}

export default Blogpost;


export async function getServerSideProps(context) {
  const { req, res, query } = context
  const { slug } = query

  const resData = await fetch(`http://localhost:1337/api/blogposts/${slug}`)

  const post = await resData.json()

  return {
    props: post
  }
}