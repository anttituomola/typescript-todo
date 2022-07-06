import "../App.css"
import { Todo } from "../types/Todo"
import React from "react"
import { useAppDispatch } from "../types/hooks"
import { removeTodo, toggleTodo } from "../redux/todoReducer"


interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const dispatch = useAppDispatch()

    const deleteItem = () => {
        dispatch(removeTodo(todo.id))
    }

    const toggleTodoEl = () => {
        dispatch(toggleTodo(todo.id))
    }

    const className = todo.completed ? "done" : ""

    return (
        <div>
            <span className={className}>{todo.text}</span>
            <input type="checkbox" checked={todo.completed} onClick={() => toggleTodoEl()}></input>
            <button onClick={() => deleteItem()}>Delete</button>
        </div>)
}

export default TodoItem