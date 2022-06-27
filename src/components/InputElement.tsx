import { useState } from "react"
import { Todo } from "../types/Todo"


interface InputElementProps {
    updateTodos: (newTodo: Todo) => void
    blah?: string
}

const InputElement = ({ updateTodos }: InputElementProps) => {
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