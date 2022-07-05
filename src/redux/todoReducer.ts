import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import cuid from 'cuid'
import { Todo } from '../types/Todo'

interface TodoState {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
              state.todos.push(action.payload);
            },
            prepare: (description: string) => ({
              payload: {
                id: cuid(),
                text: description,
                completed: false,
              } as Todo,
            }),
          },
        removeTodo: (state, action: PayloadAction<string>) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            }
        } 
    }
)

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer