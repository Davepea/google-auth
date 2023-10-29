"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const ProfileClient = () => {
  const {data : session , status} = useSession()
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <h2>{session?.user?.email}</h2>
      <img style={{width: 70, height : 70}} src={session?.user?.picture} alt="avatar" />
      <h3>{session?.user?.provider}</h3>
      <h3>{session?.user?.role}</h3>
    </div>
  )
}

export default ProfileClient