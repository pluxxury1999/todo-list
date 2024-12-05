import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types.ts";
import { initialTodos } from "../../data/data.ts";

const initialState: Array<ITodo> = initialTodos

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state: Array<ITodo>, action: PayloadAction<ITodo>) => {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                isCompleted: action.payload.isCompleted,
                isNecessary: action.payload.isNecessary
            })
        },
        toggleComplete: (state: Array<ITodo>, action: PayloadAction<string>) => {
            const todoToToggle = state.find(todo => todo.id === action.payload)
            if (todoToToggle) {
                todoToToggle.isCompleted = !todoToToggle.isCompleted
            }
        }
    }
})

export const {addTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer