import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Cta() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-22 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Mammoth</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500 text-4xl sm:text-6xl md:text-7xl">
          Mammoth Disc Golf{' '}
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
        <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          We are the champions of disc golf
        </h2>
      </motion.div>

      <div className="mt-10 max-w-md mx-auto">
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
                delay: 0.5,
              },
            },
          }}
        >
          <div className="flex flex-col md:flex-row">

          <Link href="/about">
          <a className="inline-flex mx-2 flex-wrap mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn More
            </a>
          </Link>

          <Link href="/shop">
          <a className="inline-flex mx-2 flex-wrap mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Shop Now
            </a>
          </Link>

          <Link href="/blog">
          <a className="inline-flex mx-2 flex-wrap mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Blog{' '}
            </a>
          </Link>
          
          <Link href="/team">
          <a className="inline-flex mx-2 flex-wrap mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Dream Team{' '}
            </a>
          </Link>
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Cta
