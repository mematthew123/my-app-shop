// function Blog() {

  import imageUrlBuilder from '@sanity/image-url'
  import { useState, useEffect } from 'react'
  import { useRouter } from 'next/router'
  
  export default function Team({ teams }) {
    const router = useRouter()
    const [mappedteams, setMappedteams] = useState([])
  
    useEffect(() => {
      if (teams.length) {
        const imgBuilder = imageUrlBuilder({
          projectId: 'iravytgr',
          dataset: 'production',
        })
  
        setMappedteams(
          teams.map((p) => {
            return {
              ...p,
              mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
            }
          })
        )
      } else {
        setMappedteams([])
      }
    }, [teams])
  
    // return (
  
    return (
      <div className="flex flex-col md:flex-row col-auto justify-between ">
        <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
          <h1 className="font-extrabold text-gray-900">
            <p className="text-xl sm:text-3xl md:text-4xl">Mammoth Team</p>
          </h1>
          <h3 className="text-xl sm:text-3xl md:text-4xl">Meet the players</h3>
  
          <div className=" flex col-span-2 rounded-lg mx-auto ">
            {mappedteams.length ? (
              mappedteams.map((p, index) => (
                <div
                  onClick={() => router.push(`/team/${p.slug.current}`)}
                  key={index}
                  className=" inline-grid justify-center rounded-lg shadow-lg bg-white p-8 hover:cursor-pointer "
                >
                  <h3 className=" inline-grid font-bold text-xl text-slate-800 ">{p.title}</h3>
                  <img src={p.mainImage} alt={p.title} />
                </div>
              ))
            ) : (
              <>No teams Yet</>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export const getServerSideProps = async (pageContext) => {
    const query = encodeURIComponent('*[ _type == "team" ]')
    const url = `https://iravytgr.api.sanity.io/v2021-06-07/data/query/production?query=${query}`
    const result = await fetch(url).then((res) => res.json())
  
    if (!result.result || !result.result.length) {
      return {
        props: {
          teams: [],
        },
      }
    } else {
      return {
        props: {
          teams: result.result,
        },
      }
    }
  }
  