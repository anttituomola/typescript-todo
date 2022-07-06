import { Todo } from "../types/Todo"
import TodoElement from "./TodoItem"
import { useState } from "react"
import React from "react"
import { useAppSelector, useAppDispatch } from "../types/hooks"
import FilterMode from "../types/FilterMode"

const TodoRendering = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.all)

  const showUndone = () => {
    setFilterMode(FilterMode.active)
  }

  const showDone = () => {
    setFilterMode(FilterMode.completed)
  }

  const showAll = () => {
    setFilterMode(FilterMode.all)
  }

  const filteredTodos: Todo[] = todos.filter(todo => {
    if (filterMode === FilterMode.all) {
      return true
    } else if (filterMode === FilterMode.active) {
      return !todo.completed
    } else if (filterMode === FilterMode.completed) {
      return todo.completed
    }
   return todo 
  })

  return (
    <div>
      {filteredTodos.map((todo: Todo) => {
        return <TodoElement
          todo={todo}
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