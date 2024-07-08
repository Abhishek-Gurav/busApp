import Image from 'next/image'
import React from 'react'
import nextsvg from '@/public/next.svg'
function page() {
  return (
    <>
    <div className='flex flex-1 justify-center items-center'>
      <b>About</b>
    </div>
    <div className='flex justify-between m-20 items-center' >
      <Image src={nextsvg} className='w-50 h-50 ' /> 
      <p>We are here to create streamline bus booking.</p>
    </div>  
    <div className='flex justify-between m-20 items-center' >
      <p>We are here to create streamline bus booking.</p>
      <Image src={nextsvg} className='w-50 h-50' /> 
    </div>  
    </>
  )
}

export default page