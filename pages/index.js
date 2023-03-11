import { getProductsInCollection } from "../lib/shopify";
import Cta from "../components/Cta";
import ProductList from "../components/ProductList";
import Link from "next/link";
import disc from "../images/disc.jpg";
import blog from "./blog.js";
import Image from "next/image";
import sunset from "../images/sunset.jpeg";
import basket from "../images/basket.webp";
import tee from "../images/tee.webp";
import greenbasket from "../images/greenbasket.webp";

export default function Home({ products }) {
  return (
    <div>
      <Cta />
      {/* <ProductList products={products} /> */}

      <div className="my-48 mx-auto flex-col max-w-7xl px-4 sm:mt-22 md:mt-72 text-center">
        <h1 className="font-extrabold text-4xl text-gray-900">Mammoth Blog</h1>

        <div className=" text-xl mt-3 max-w-md mx-auto text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          <p className="font-bold">The latest disc golf news and events</p>

          <div className=" bg-gray-200 rounded-3xl overflow-hidden min-w-full">
            <div className="relative group-hover:opacity-75 h-72 ">
              <Image
                src={basket}
                alt="disc golf"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

          <Link href="/blog">
            <a className="inline-flex mx-2 mt-3 items-center justify-center gap-2 px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              News and Events
            </a>
          </Link>
        </div>
      </div>

      <div className="my-48 mx-auto flex-col max-w-7xl px-4 sm:mt-22 md:mt-72 text-center">
        <h1 className="font-extrabold text-4xl text-gray-900">
          Mammoth All Stars
        </h1>

        <div className=" text-xl mt-3 max-w-md mx-auto text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          <p className="font-bold">Team Mammoth</p>

          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-72 ">
              <Image
                src={sunset}
                alt="sunset"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

          <Link href="/team">
            <a className=" inline-flex mx-2 flex-wrap mt-3 items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Meet the Dream Team
            </a>
          </Link>
        </div>
      </div>

      <div className="my-48 mx-auto flex-col max-w-7xl px-4 sm:mt-22 md:mt-72 text-center">
        <h1 className="font-extrabold text-4xl text-gray-900">
          The Mammoth Way
        </h1>

        <div className=" text-xl mt-3 max-w-md mx-auto text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          <p className="font-bold">About Us</p>

          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-72 ">
              <Image
                src={tee}
                alt="tee"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

          <Link href="/about">
            <a className=" inline-flex mx-2 flex-wrap mt-3 items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn More
            </a>
          </Link>
        </div>
      </div>

      <div className="my-48 mx-auto flex-col max-w-7xl px-4 sm:mt-22 md:mt-72 text-center">
        <h1 className="font-extrabold text-4xl text-gray-900">Shop</h1>

        <div className=" text-xl mt-3 max-w-md mx-auto text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
          <p className="font-bold">Mammoth Disc Golf Gear</p>

          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-72 ">
              <Image
                src={greenbasket}
                alt="greenbasket"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
        </div>
        <Link href="/shop">
          <a className=" inline-flex mx-2 flex-wrap mt-3 items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Shop Now
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
