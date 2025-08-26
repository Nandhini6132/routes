import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
     {/* //image optimization */}
     <Image src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716681600&semt=ais_user' width={1000} height={600}/> 
    </>
  )
}

export default page