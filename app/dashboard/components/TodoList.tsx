"use client"
import { Todo } from "@/app/models/todo";
import { useEffect, useState } from "react"
import TodoItem from "./TodoItem";
import { useAppSelector } from "@/app/store";

const TodoList = () => {
    const user = useAppSelector((state) => state.auth.user)
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodoList = async () => {
        try {
            const res = await fetch(`http://localhost:3000/users/${user?.id}/todos`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                mode: 'cors',
            })
            const data: Todo[] = await res.json()
            console.log(data);
            setTodos(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchTodoList()
    }, [user])
    return (
        <div className="w-full">
            <div>{todos.length == 0 && <>Add some todos in your list</>}</div>
            <div className="flex flex-col justify-center items-center">
                {
                    todos.map((e, i) => {
                        return (<TodoItem todo={e} key={e.id}></TodoItem>)
                    })
                }
            </div>
        </div>
    )
}

export default TodoList