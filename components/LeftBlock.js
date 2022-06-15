import night from '../images/night.webp'
import Image from 'next/image'

const LeftBlock = () => {
  return (
    <>
      <section className="lg:flex flex-row-reverse items-center 2xl:max-w-7xl 2xl:mx-auto">
        <Image src={night} alt="disc" className=" min-w-full h-full rounded-lg " />
        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-20">
          <h2 className="text-2xl my-5 lg:text-4xl">Play Mammoth</h2>
          <p className="mb-5">
            The course is a great place to practice your disc golf skills. The course offers a place
            to gather and play a quick round of horse, or a full 18 hole round. One of the most
            amazing things about the course is the amazing views of the river and the mountains.
          </p>
        </div>
      </section>
    </>
  )
}

export default LeftBlock
