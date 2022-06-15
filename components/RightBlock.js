import sunset from "../images/sunset.jpeg"
import Image from "next/image"

const RightBlock = () => {
  return (
    <>
      <section className="lg:flex items-center 2xl:max-w-7xl 2xl:mx-auto">
        <Image src={sunset} alt="disc" className=" min-w-full h-full rounded-lg " />


        <div className="p-5 text-center lg:text-left lg:w-1/2 lg:p-20 lg:ml-5">
          <h2 className="text-2xl my-5 lg:text-4xl">
Practice where the professionals play          </h2>
          <p className="mb-5">
            Mammoth Links is a top tier world renonwned course located in beautiful glacial lake Missoula. 
            The course is a great place to practice your disc golf skills.
            Meet new friends. Learn new tricks. Enjoy the scenery.
         
          </p>
          <button className="btn-standout">Learn More</button>
        </div>
      </section>
    </>
  )
}

export default RightBlock