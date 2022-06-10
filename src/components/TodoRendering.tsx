import { Todo } from "../App"

const TodoRendering = ({ todos }) => {
  return (
    <div>{todos.map(todo => todo.text)}</div>
  )
}

export default TodoRendering