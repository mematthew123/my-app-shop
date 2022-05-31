import Image from 'next/dist/client/image'
import BackButton from '../components/BackButton'

function About() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Mammoth</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500 text-4xl sm:text-6xl md:text-7xl">
          Mammoth Disc Golf{' '}
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        We are the champions of disc golf
      </h2>
      <p className="mt-10 max-w-md mx-auto">
        We started as a small as an idea between friends, looking to make a difference in the world
        of disc golf. We are now a full-service disc golf company, with a team of professional disc
        golf instructors and a team of disc golf players.
      </p>

      <p className="mt-10 max-w-md mx-auto">
        We only sell one disc becuase that's the only disc you will ever need. We sell more than
        discs however, we sell experiences.
      </p>
      <BackButton />
    </div>

  )
}

export default About
