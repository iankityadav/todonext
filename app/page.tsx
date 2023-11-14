"use client"

import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { setUser } from "./store/auth/auth.slice";

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setIsAuthenticated(isAuth);
    if (isAuth) {
      dispatch(setUser({ name: "Ankit Yadav", email: "ankit@mail.co", id: "67c4bdf3-2c60-41c8-89e8-cb4436c78add" }));
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
