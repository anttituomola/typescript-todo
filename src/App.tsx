import InputElement from "./components/InputElement"
import TodoRendering from "./components/TodoRendering"
import { useState } from "react"
import { Todo } from "./types/Todo"
import "./App.css"
import React from "react"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const markDone = (id: string): void => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className="container">
      <InputElement />
      <TodoRendering
        todos={todos}
        deleteTodo={deleteTodo}
        markDone={markDone}
      />
    </div>
  )
}

export default App