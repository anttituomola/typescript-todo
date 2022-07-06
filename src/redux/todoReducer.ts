import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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
            },
        toggleTodo: (state, action: PayloadAction<string>) => {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                }
                )
            }
        } 
    }
)

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer