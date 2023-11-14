"use client"

import { useAppSelector } from "@/app/store"
import { useRouter } from "next/navigation"

const SignUpContainer = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const router = useRouter()
    if (isAuth) {
        router.push('/')
        return null
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            Sign up
        </div>
    )
}

export default SignUpContainer