"use client"

import { useAppSelector } from "@/app/store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const AddTodo = (
    { flag, setFlag, addTodoFlag, setAddTodoFlag
    }: { flag: boolean, setFlag: any, addTodoFlag: boolean, setAddTodoFlag: any }) => {
    const user = useAppSelector((state) => state.auth.user)
    const token = useAppSelector((state) => state.auth.token)
    const [values, setValues] = useState({ title: "", desc: "", isComplete: false });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValues({ title: "", desc: "", isComplete: false })
        try {
            const res = await fetch(`http://localhost:3000/users/${user?.id}/todos`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": token },
                body: JSON.stringify(values),
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
        <div className="rounded-md p-3 m-3 space-y-4 md:space-y-6 sm:p-8 mt-[calc(10vh-0.5rem)] dark:bg-gray-800 dark:border-gray-700">

            <form className="relative" onSubmit={handleSubmit}>
                <button type="button" onClick={() => setAddTodoFlag(!addTodoFlag)} className="absolute -top-6 -right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <XMarkIcon className="w-6 h-6">
                    </XMarkIcon>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="pb-3">
                    <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                    </label>
                    <input onChange={handleChange} value={values.title} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                </div>
                <div className="pb-4">
                    <label htmlFor="desc" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <input onChange={handleChange} value={values.desc} type="text" name="desc" id="desc" placeholder="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTodo