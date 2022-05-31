import Link from 'next/link'
import React from 'react'

function BackButton() {
  return (
    <div>
      <Link href="/">
        <a className="bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-full mt-50">Back</a>
      </Link>
    </div>
  )
}
export default BackButton
