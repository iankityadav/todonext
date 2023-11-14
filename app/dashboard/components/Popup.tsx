"use client"

import { Todo } from "@/app/models/todo"
import { XMarkIcon } from "@heroicons/react/24/outline"

const Popup = ({ todo, popUp, setPopUp, completeTodo, deleteTodo }: { todo: Todo, popUp: boolean, setPopUp: any, completeTodo: any, deleteTodo: any }) => {
    return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className={`${popUp ? "hidden" : ""}` + "overflow-y-auto overflow-x-hidden fixed mx-auto z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {todo.title}
                        </h3>
                        <button type="button" onClick={() => setPopUp(!popUp)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <XMarkIcon className="w-6 h-6">
                            </XMarkIcon>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {todo.desc}
                        </p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        {!todo.isComplete &&
                            <button onClick={() => {
                                completeTodo(todo); console.log("complete");
                            }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Mark Complete
                            </button>
                        }
                        <button onClick={() => deleteTodo(todo)} className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-red-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-red-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Popup