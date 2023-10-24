'use client'
import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '../store'


const NavBar = () => {
  const isAuthenticated: boolean = useAppSelector((state) => state.auth.isAuth)
  return (
    <div className='flex justify-center'>
      <div className='flex text-base font-light xl:space-x-16 space-x-4 dark:bg-gray-800 bg-gray-200 shadow-md dark:shadow-indigo-500 m-2 p-2 rounded-sm fixed w-11/12 justify-center'>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        {isAuthenticated && <Link href='/login'>Logout</Link>}
        {!isAuthenticated && <Link href='/login'>Login</Link>}
        {!isAuthenticated && <Link href='/signup'>Sign up</Link>}
      </div>
    </div>
  )
}

export default NavBar