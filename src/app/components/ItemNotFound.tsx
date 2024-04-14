import Image from 'next/image'
import React from 'react'

const ItemNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      The item is not loading o

      <Image src="images/dog image.png" alt='dog image' width={200} height={150} className='mt-4' />
    </div>
  )
}

export default ItemNotFound