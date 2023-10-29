"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const SignIn = () => {
  return (
    <div className='flex justify-center items-center'>
        <button className='grid place-items-center px-5 py-2 mt-24 bg-blue-800 text-white rounded-lg outline-2 outline-gray-950' onClick={()=>signIn('google',{callbackUrl : '/'})}>Sign in with Google</button>
    </div>
  )
}

export default SignIn