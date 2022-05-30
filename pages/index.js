import { getAllProducts } from "../lib/shopify"
import ProductCard from "../components/ProductCard"

export default function Home({ products }) {

  return (
<div>
      <header className=" bg-gray-700 text-white text-center w-full h-auto  ">
        <div className="container mx-auto px-4 w-full">
          <h1 className="text-3xl font-bold"> Mammoth Discs </h1>
          <p className="text-xl">
            We have the best discs around
          </p>
        </div>
      </header>

          


    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
       </div>
      </div>
    </div>
    </div>

  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }, // will be passed to the page component as props
  }
}