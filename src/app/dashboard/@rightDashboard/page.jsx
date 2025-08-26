import Card from '@/app/components/Card'
import OuterCard from '@/app/components/OuterCard'
import Link from 'next/link'
import React from 'react'

const RightDashboard = () => {
  return ( //unmatched routes
    <Card>
      RightDashboard
      <Link href='/dashboard/changedDashboard'>change to default</Link>
    </Card>
  
  )
}

export default RightDashboard