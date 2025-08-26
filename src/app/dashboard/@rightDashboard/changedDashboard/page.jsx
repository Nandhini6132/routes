import Card from '@/app/components/Card'
import OuterCard from '@/app/components/OuterCard'
import Link from 'next/link'
import React from 'react'

const ChangedDashboard = () => {
  return (
    <Card>
        Default
          <Link href='/dashboard'>change to right</Link>
    </Card>
  )
}

export default ChangedDashboard