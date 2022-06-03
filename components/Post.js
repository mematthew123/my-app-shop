import { urlFor } from "../sanity"

const Post = ({ post }) => {

  return (
    <div className="blog">
      <div className=' mx-auto max-w-2xl px-4 justify-center'>    '
      <h1 className="text-4xl font-bold text-center">{post.title}</h1>
      <div className="text-center">
        <img src={urlFor(post.mainImage).width(600).url()} alt={post.title} />
      </div>
      <div className="text-center">
        <p className="text-xl">{post.body}</p>
      </div>
      </div>
    </div>
  )
}
      
export default Post