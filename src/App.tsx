import InputElement from "./components/InputElement"
import TodoRendering from "./components/TodoRendering"
import { useState } from "react"
import { Todo } from "./types/Todo"
import "./App.css"
import React from "react"

const App = () => {

  return (
    <div className="container">
      <InputElement />
      <TodoRendering />
    </div>
  )
}

export default App