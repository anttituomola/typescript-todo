import InputElement from "./components/InputElement"
import TodoRendering from "./components/TodoRendering"
import { useState } from "react"
import { Todo } from "./types/Todo"
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const updateTodos = (newTodo: Todo): void => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const markDone = (id: number): void => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className="container">
      <InputElement updateTodos={updateTodos} />
      <TodoRendering
        todos={todos}
        deleteTodo={deleteTodo}
        markDone={markDone}
      />
    </div>
  )
}

export default App