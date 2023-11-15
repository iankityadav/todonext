"use client"
import { useAppSelector } from '@/app/store'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { Todo } from '@/app/models/todo'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const TodoContainer = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  const router = useRouter()
  const user = useAppSelector((state) => state.auth.user)
  const token = useAppSelector((state) => state.auth.token)
  const [todos, setTodos] = useState<Todo[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [addTodoFlag, setAddTodoFlag] = useState<boolean>(false);

  const fetchTodoList = async () => {
    if (user?.id === undefined) return []
    try {
      const res = await fetch(`http://localhost:3000/users/${user?.id}/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        mode: 'cors',
      })
      const data: Todo[] = await res.json()
      console.log(data);
      setTodos(data)
    } catch (error) {
      console.error(error);
    }
    return []
  }

  useEffect(() => {
    fetchTodoList()
  }, [flag])

  if (!isAuth) {
    router.push('/login')
    return null
  }

  const deleteTodo = async (todo: Todo) => {
    console.log("deleteTodo -- ");
    try {
      const res = await fetch(`http://localhost:3000/users/${user?.id}/todos?where=` + encodeURIComponent(JSON.stringify({
        id: "" + todo.id
      })), {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        mode: 'cors',
      })
      const data = await res.json()
      console.log(data);
      setTodos(todos.filter((e, i) => e.id != todo.id))
      setFlag(!flag)
    } catch (error) {
      console.error(error);
    }
  }

  const completeTodo = async (todo: Todo) => {
    console.log("completeTodo -- ");
    try {
      todo.isComplete = true;
      const res = await fetch(`http://localhost:3000/users/${user?.id}/todos?where=` + encodeURIComponent(JSON.stringify({
        id: "" + todo.id
      })), {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        body: JSON.stringify(todo),
        mode: 'cors',
      })
      const data = await res.json()
      console.log(data);
      setFlag(!flag)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {addTodoFlag ?
        <AddTodo flag={flag} setFlag={setFlag}
          addTodoFlag={addTodoFlag} setAddTodoFlag={setAddTodoFlag} >
        </AddTodo> :
        <button onClick={() => setAddTodoFlag(!addTodoFlag)}>
          <PlusCircleIcon className='w-12 h-12 m-2 text-indigo-500 fixed right-4 bottom-4 shadow-md'></PlusCircleIcon>
        </button>
      }
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoList>
    </div >
  )
}

export default TodoContainer