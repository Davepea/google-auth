"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const ProtectedClient = () => {
  const {data : session, status}=useSession()
  console.log(session, status);
  return (
    <div>
        <h1>{session?.user?.name}</h1>
        <h3>{session?.user?.email}</h3>
        <img src={session?.user?.image} width={70} height={70} className='rounded-full' alt="avatar" />
    </div>
  )
}

export default ProtectedClient