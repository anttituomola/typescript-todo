import "../App.css"

const TodoElement = ({ todo, deleteTodo, markDone }) => {
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

export default TodoElement