import Image from 'next/dist/client/image'
import BackButton from '../components/BackButton'
import Course from '../components/Course'

function course() {
  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Mammoth</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500 text-4xl sm:text-6xl md:text-7xl">
          Mammoth Disc Golf{' '}
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        We are the champions of disc golf
      </h2>
      <Course/>
      </div>
  )
}

export default course
