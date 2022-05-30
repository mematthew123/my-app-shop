import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white fixed bottom-0 left-0 w-full h-16">
    <div className="container mx-auto px-4 w-full">
        <div className="flex justify-center">
            <div className="text-center">
                <p className="text-gray-700 text-sm">
                    &copy; {new Date().getFullYear()} Mammoth Discs. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</div>

    )
}

export default Footer