import BackButton from '../components/BackButton'
import Grid from '../components/Grid'
import LeftBlock from '../components/LeftBlock'
import RightBlock from '../components/RightBlock'
import tee from '../images/tee.webp'
import sunset from '../images/sunset.jpeg'
import Image from 'next/image'
import night from '../images/night.webp'

function course() {
  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <RightBlock />
      <div>
        <LeftBlock />
        <div>
          <section className="grid flex-col-4 rounded-lg gap-2">
            <Image src={sunset} alt="disc" className=" min-w-full h-full rounded-lg " />
            <Image src={tee} alt="tee" className=" min-w-full h-full rounded-lg " />
            <Image src={night} alt="disc" className=" min-w-full h-full rounded-lg " />
          </section>

          <br />
          <BackButton />
        </div>
      </div>
    </div>
  )
}

export default course
