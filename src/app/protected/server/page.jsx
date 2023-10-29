import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'

const ProtectedServer = async() => {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <h3>{session?.user?.email}</h3>
      <img src={session?.user?.image} alt="avatar" width={70} height={70} className='rounded-full' />
    </div>
  )
}

export default ProtectedServer