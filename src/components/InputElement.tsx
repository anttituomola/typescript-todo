import { useState } from "react"

export interface Todo {
    id: number
    text: string
    completed: boolean
}

interface UpdateTodos {
    updateTodos: (newTodo: Todo) => void
}

const InputElement = ({ updateTodos }: UpdateTodos) => {
    const [inputValue, setInputValue] = useState("")

    const addTodo = () => {
        const aTodo: Todo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        }
        updateTodos(aTodo)
        setInputValue("")
    }

    return (
        <>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
            <button onClick={() => addTodo()}>Add todo</button>
        </>
    )
}

export default InputElement