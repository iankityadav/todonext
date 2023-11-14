import { Todo } from '@/app/models/todo'
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/24/solid'

const TodoItem = ({ todo }: { todo: Todo }) => {
    return (
        <div className='border-solid border-2 p-2 w-3/4 flex justify-center items-center'>
            <div className='font-medium'>
                {todo.title}
            </div>
            <div className='text-sm'>
                {todo.desc}
            </div>
            {
                todo.isComplete ?
                    <CheckCircleIcon className='text-blue-500'></CheckCircleIcon > :
                    <CheckIcon className='text-blue-500'></CheckIcon >
            }
        </div>
    )
}

export default TodoItem