import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../types/hooks"
import { addTodo } from "../redux/todoReducer"


const InputElement = () => {
    const [inputValue, setInputValue] = useState("")
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    const addTodoEl = () => { // "shadowing"
        if (inputValue) {
            dispatch(addTodo(inputValue))
        }
        setInputValue("")
    }

    return (
        <>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
            <button onClick={() => addTodoEl()}>Add todo</button>
        </>
    )
}

export default InputElement
