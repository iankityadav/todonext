"use client"

import { User } from "@/app/models/user"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { setUser } from "@/app/store/auth/auth.slice"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const SignUpContainer = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [values, setValues] = useState({
        "username": "",
        "email": "",
        "address": "",
        "name": "",
        "password": "",
    });
    if (isAuth) {
        router.push('/')
        return null
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch(`${apiUrl}/users/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                mode: 'cors',
            })
            const data: User = await res.json()
            console.log(data);
            if (res.ok) {
                dispatch(setUser(data))
                Swal.fire({
                    // title: "Failed to login",
                    icon: 'success',
                    title: 'Account created successfully',
                    text: 'Please login with your credentials',
                    timer: 5000,
                    showCloseButton: true,
                    customClass: {
                        popup: "dark:bg-gray-700 dark:text-white text-black flex"
                    }
                }).then(() => router.push('/login'))
            } else if (res.status === 400) {
                Swal.fire({
                    title: 'Username already taken',
                    icon: 'warning',
                    text: 'Please try with another username',
                    timer: 5000,
                    showCloseButton: true,
                    customClass: {
                        popup: "dark:bg-gray-700 dark:text-white text-black flex text-base"
                    }
                })
            } else {
                Swal.fire({
                    title: "Failed to signup",
                    icon: 'error',
                    text: 'Error occured while creating your account, please try again.',
                    timer: 5000,
                    showCloseButton: true,
                    customClass: {
                        popup: "dark:bg-gray-700 dark:text-white text-black flex"
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-6 pt-3 pb-6 space-y-1 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create new account
                        </h1>
                        <form className="space-y-1 md:space-y-3" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input onChange={handleChange} value={values.name} type="text" name="name" id="name" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="given-name" required />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username
                                </label>
                                <input onChange={handleChange} value={values.username} type="text" name="username" id="username" placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="username" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input onChange={handleChange} value={values.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" autoComplete="email" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input onChange={handleChange} value={values.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="new-password" required />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Address
                                </label>
                                <input onChange={handleChange} value={values.address} type="address" name="address" id="address" placeholder="India" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="address-line1" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpContainer