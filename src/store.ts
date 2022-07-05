import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./redux/todoReducer"
import thunkMiddleware from 'redux-thunk';


export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: [thunkMiddleware],

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch