import styles from '../../styles/Team.module.css'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

export const Team = ({ title, body, image }) => {
  //  console.log(title, body, image)

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'iravytgr',
      dataset: 'production',
    })

    setImageUrl(imgBuilder.image(image))
  }, [image])

  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <h1 className="px-2 mt-1 font-extrabold text-2xl text-gray-900">Mammoth All-Stars</h1>

      <div className={styles.main}>
        <h1 className=" font-bold text-2xl text-blue-700 underline ">{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}

          <BlockContent blocks={body} />
        </div>
      </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  const query = encodeURIComponent(`*[ _type == "team" && slug.current == "${pageSlug}" ]`)
  const url = `https://iravytgr.api.sanity.io/v2021-06-07/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json())
  const team = result.result[0]

  if (!team) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        body: team.body,
        title: team.title,
        image: team.mainImage,
      },
    }
  }
}

export default Team
