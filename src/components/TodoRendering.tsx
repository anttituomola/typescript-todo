import { Todo } from "./InputElement"
import TodoElement from "./Todo"

// What's the correct type here?
const TodoRendering = ({ todos, deleteTodo, markDone }: any) => {
  return (
    <div>
      {todos.map((todo: Todo) => {
        return <TodoElement
          todo={todo}
          deleteTodo={deleteTodo}
          markDone={markDone}
          key={todo.id} />
      })}
    </div>
  )
}

export default TodoRendering