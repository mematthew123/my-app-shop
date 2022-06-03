import { getProductsInCollection } from '../lib/shopify'
import Cta from '../components/Cta'

export default function Home({ products }) {
  return (
    <div>
      <Cta />
      {/* <ProductList products={products} /> */}
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
