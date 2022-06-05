export const Post = ({ title, body, image }) => {
  // console.log(title, body, image)

  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <h1 className="font-extrabold text-gray-900">Mammoth Blog Page</h1>
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

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
  const url = `https://iravytgr.api.sanity.io/v2021-06-07/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json())
  const post = result.result[0]

  if (!post) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    }
  }
}

export default Post
