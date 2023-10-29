
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import SignOut from './SignOut'

const Header = async() => {
  const session = await getServerSession(authOptions)
  // console.log(session);
  return (
    <div className=' flex space-x-4 justify-between px-5 py-3 rounded-md text-white'>
        <Link href='/'>Home</Link>
        <Link href='/protected/client'>Protected(client)</Link>
        <Link href='/protected/server'>Protected(server)</Link>
        {session ? <>
          <Link href='/profile/client'>Profile(client)</Link>
        <Link href='/profile/server'>Profile(server)</Link>
        <Link href='/dashboard'>Admin Dashboard</Link>
        <SignOut/>
        </> : <>
        <Link href='/signin'>Sign In</Link>
        </>}
    </div>
  )
}

export default Header