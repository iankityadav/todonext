"use client"

import UserCard from "./components/UserCard";
import { User } from "./models/user";
import { useEffect, useState } from "react";
import { useAppSelector } from "./store";

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  let [user, setUser] = useState<User | undefined>(); //useAppSelector((state) => state.auth.user);
  useEffect(() => {
    setIsAuthenticated(isAuth);
    setUser({ email: 'ankit@gmail.com', name: 'ANkit Yadav' })
    console.log(user)
  }, [isAuth])
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
