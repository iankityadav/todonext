import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  let isAuthenticated: boolean = false
  return (
    <div className='flex text-sm space-x-4 dark:bg-gray-600 bg-gray-200 m-2 p-2 rounded-sm'>
      <Link href='/'>Home</Link>
      <Link href='/dashboard'>Dashboard</Link>
      { !isAuthenticated && <Link href='/login'>Login</Link> }
    </div>
  )
}

export default NavBar