import '../styles/globals.css'
import ProductCard from '../components/ProductCard'
import Nav from '../components/Nav'
import Footer  from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
<Footer />
    
   <Component

  {...pageProps} />
    </>

  )
}

export default MyApp
