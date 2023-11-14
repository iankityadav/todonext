"use client"
import { useAppSelector } from '@/app/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import TodoList from './TodoList'

const TodoContainer = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
    const router = useRouter()
    if (!isAuth) {
        router.push('/login')
        return null
    }
  return (
    <div className="h-screen flex justify-center items-center">
        <TodoList></TodoList>
    </div>
  )
}

export default TodoContainer