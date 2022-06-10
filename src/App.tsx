import InputElement from "./components/InputElement"
import TodoRendering from "./components/TodoRendering"
import { useState } from "react"

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState([{}])

  const updateTodos = (newTodo: Todo): void => {
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <InputElement updateTodos={updateTodos}/>
      <TodoRendering todos={todos}/>
    </>
  )
}

export default App