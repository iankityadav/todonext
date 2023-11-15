"use client"

import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { setUser } from "./store/auth/auth.slice";
import { User } from "./models/user";

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const token = useAppSelector((state) => state.auth.token)
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const loadProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/whoAmI", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        body: '',
        mode: 'cors',
      })
      const data: User = await res.json()
      console.log(data);
      if (res.ok) {
        dispatch(setUser(data))
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    setIsAuthenticated(isAuth);
    if (isAuth) {
      loadProfile()
    }
    console.log(user)
  }, [isAuthenticated])
  return (
    <div className="h-screen flex justify-center items-center">
      <div className='flex flex-col justify-center p-2 h-max'>
        {!isAuthenticated &&
          <div className="text-5xl font-bold tracking-tight">
            Todo Application
          </div>
        }
        {isAuthenticated && (<>
          <div className="text-5xl font-bold tracking-tight">
            Welcome {user?.name.split(" ")[0]}!
          </div>
          <div className="mt-6 flex justify-center items-center">
            {user && <UserCard user={user} />}
          </div>
        </>)
        }
      </div>
    </div>
  )
}
