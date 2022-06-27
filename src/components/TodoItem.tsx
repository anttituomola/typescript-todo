import "../App.css"
import { Todo } from "../types/Todo"

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void,
    markDone: (id: number) => void
}

const TodoItem = ({ todo, deleteTodo, markDone }: TodoItemProps) => {
    const deleteItem = () => {
        deleteTodo(todo.id)
    }

    const toggleTodo = () => {
        markDone(todo.id)
    }

    const className = todo.completed ? "done" : ""

    return (
        <div>
            <span className={className}>{todo.text}</span>
            <input type="checkbox" checked={todo.completed} onClick={() => toggleTodo()}></input>
            <button onClick={() => deleteItem()}>Delete</button>
        </div>)
}

export default TodoItem