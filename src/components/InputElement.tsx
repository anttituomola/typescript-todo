import { useState } from "react"
import { Todo } from "../App"

const InputElement = ({ updateTodos }) => {
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
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue}/>
            <button onClick={() => addTodo()}>Add todo</button>
        </>
    )
}

export default InputElement