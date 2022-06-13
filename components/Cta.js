import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Cta() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-22 md:mt-72 text-center pb-2">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Mammoth</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500 text-4xl sm:text-6xl md:text-7xl">
          Mammoth Disc Golf
        </p>
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h2 className=" text-2xl mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          We are the champions of disc golf
        </h2>
      </motion.div>

      <div className="mt-10 max-w-md mx-auto">
        {/* <div className=" bg-gray-200 rounded-3xl overflow-hidden min-w-full">
            <div className="relative group-hover:opacity-75 h-72 ">
              <Image
                src={tee}
                className=" rounded-lg overflow-hidden object-cover "
                alt="throw"
                width={1200}
                height={800}
              />
            </div>
          </div> */}

        <div className=" justify-center flex flex-col md:flex-row">
          <Link href="/shop">
            <a className="inline-flex mx-2 flex-wrap mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Shop Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cta
