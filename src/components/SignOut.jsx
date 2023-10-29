"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
    <div>
        <button className='bg-red-800 text-white px-3 py-1 rounded-md outline-2 outline-dashed' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default SignOut