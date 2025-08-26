import React from 'react'

const ReviewDetail = ({params}) => {
    console.log('lll')
  return (
    <div>Review Detail of {params.reviewId} of the product {params.productId}</div>
  )
}

export default ReviewDetail