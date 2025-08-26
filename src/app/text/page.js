import React from 'react'
import {Roboto} from 'next/font/google'

const robotofont=Roboto({subsets:['greek'], weight:'900'})
const page = () => {
  return (
    <>
     <h2>Normal text</h2>
     <h2 className={robotofont.className}>Text from google fonts</h2>
    </>
  )
}

export default page