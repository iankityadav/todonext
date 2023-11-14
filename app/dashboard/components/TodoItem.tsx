import { Todo } from '@/app/models/todo'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Popup from './Popup';

const TodoItem = ({ todo, completeTodo, deleteTodo }: { todo: Todo, completeTodo: any, deleteTodo: any }) => {
    const [popUp, setPopUp] = useState(false)

    return (
        <div className='w-full border-indigo-300 my-2 border rounded-sm p-2 flex flex-col justify-center items-center'>
            <div className='flex justify-between w-full'>
                <button className={`${todo.isComplete ? 'line-through' : ''} font-medium`} onClick={() => { setPopUp(!popUp) }} data-modal-target="default-modal" data-modal-toggle="default-modal">
                    {todo.title}
                </button>
                <div className='flex space-x-2'>
                    {
                        todo.isComplete ?
                            <CheckCircleIcon className='w-6 h-6 text-green-500'></CheckCircleIcon > :
                            <button onClick={() => completeTodo(todo)}>
                                <CheckCircleIcon className='w-6 h-6 text-blue-500'></CheckCircleIcon >
                            </button>
                    }
                    <button onClick={() => deleteTodo(todo)}>
                        <XCircleIcon className='w-6 h-6 text-red-500'></XCircleIcon>
                    </button>
                </div>
            </div>
            {popUp &&
                <Popup todo={todo} popUp={popUp} setPopUp={setPopUp} completeTodo={completeTodo} deleteTodo={deleteTodo}></Popup>
            }

        </div>
    )
}

export default TodoItem