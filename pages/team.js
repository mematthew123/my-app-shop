// these are the parameters for the team page

// {title} {place} {date} {disc} {link} {mainImage} {description}

import Image from 'next/dist/client/image'
import BackButton from '../components/BackButton'
import Hero from '../components/Hero'

function Team() {
  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
        <Hero/>
        <h1 className="font-extrabold text-gray-900">
            <p className="text-xl sm:text-3xl md:text-4xl">Coming Soon</p>
            </h1>
    <br />
    
    <BackButton />
    </div>
  )
}

export default Team
