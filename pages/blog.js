import Image from 'next/dist/client/image'
import BackButton from '../components/BackButton'

// function Blog() {

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Blog({ posts }) {
  const router = useRouter()
  const [mappedPosts, setMappedPosts] = useState([])

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'iravytgr',
        dataset: 'production',
      })

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          }
        })
      )
    } else {
      setMappedPosts([])
    }
  }, [posts])

  // return (

  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Mammoth Blog</p>
      </h1>
      <h3 className="text-xl sm:text-3xl md:text-4xl">Recent Posts:</h3>

      <div className={styles.feed}>
        {mappedPosts.length ? (
          mappedPosts.map((p, index) => (
            <div
              onClick={() => router.push(`/post/${p.slug.current}`)}
              key={index}
              className={styles.post}
            >
              <h3>{p.title}</h3>
              <img className={styles.mainImage} src={p.mainImage} />
            </div>
          ))
        ) : (
          <>No Posts Yet</>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]')
  const url = `https://iravytgr.api.sanity.io/v2021-06-07/data/query/production?query=${query}`
  const result = await fetch(url).then((res) => res.json())

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts: result.result,
      },
    }
  }
}
