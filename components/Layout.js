import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Nav />

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
  )
}
