import React from 'react'
import { User } from '../models/user'

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className='m-4 p-6 flex justify-center items-center space-x-4 border-indigo-600 border-2 rounded-md dark:bg-gray-900'>
      <div className='flex flex-col justify-center items-center '>
        <div className='text-indigo-600 py-3 border-indigo-600 border-2 rounded-full w-16 h-16 flex justify-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div className='font-medium'>{user?.name}</div>
        <div className='font-light'>{user?.email}</div>
      </div>
    </div>
  )
}

export default UserCard