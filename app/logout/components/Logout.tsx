"use client"
import { useAppDispatch } from "@/app/store";
import { logOut } from "@/app/store/auth/auth.slice"

const Logout = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      {
        dispatch(logOut()) && < div className="h-screen flex justify-center items-center" >
          Logged out Succesfully
        </div >
      }
    </>
  )
}

export default Logout