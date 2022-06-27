import { Todo } from "../types/Todo"
import TodoElement from "./TodoItem"
import { useState } from "react"

interface TodoRendenringProps {
  todos: Todo[],
  deleteTodo: (id: number) => void,
  markDone: (id: number) => void,
}

const TodoRendering = ({ todos, deleteTodo, markDone }: TodoRendenringProps) => {
  const [filterMode, setFilterMode] = useState<string>("all")

  const showUndone = () => {
    console.log("showUndoneTodos")
    setFilterMode("active")
  }

  const showDone = () => {
    console.log("showDoneTodos")
    setFilterMode("completed")
  }

  const showAll = () => {
    console.log("showAllTodos")
    setFilterMode("all")
  }

  const filteredTodos: Todo[] = todos.filter(todo => {
    if (filterMode === 'all') {
      return true
    } else if (filterMode === 'active') {
      return !todo.completed
    } else if (filterMode === 'completed') {
      return todo.completed
    }
  })


  return (
    <div>
      {filteredTodos.map((todo: Todo) => {
        return <TodoElement
          todo={todo}
          deleteTodo={deleteTodo}
          markDone={markDone}
          key={todo.id} />
      })}
      <div className="filters">
        <p>{filterMode}</p>
        <button onClick={showAll}>Show all</button>
        <button onClick={showUndone}>Show undone</button>
        <button onClick={showDone}>Show done</button>
      </div>
    </div>
  )
}

export default TodoRendering