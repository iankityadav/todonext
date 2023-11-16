"use client"
import { Todo } from "@/app/models/todo";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo, deleteTodo }:
    { todos: Todo[], completeTodo: any, deleteTodo: any }) => {

    return (
        <div className="w-3/4 lg:w-1/2 p-2 scroll-p-1 overflow-y-auto">
            <div className="flex justify-center items-center">{todos.length == 0 && <>Add some todos in your list</>}</div>
            <div className="w-full flex flex-col justify-center items-center">
                {
                    todos.map((e, i) => {
                        return (<TodoItem todo={e} completeTodo={completeTodo} deleteTodo={deleteTodo} key={e.id}></TodoItem>)
                    })
                }
            </div>
        </div>
    )
}

export default TodoList