import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./completed/todos.slice.ts"

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
