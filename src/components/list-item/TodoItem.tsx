import { ITodo } from "../../types/types.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { toggleComplete } from "../../store/completed/todos.slice.ts";
import React from "react"

const TodoItem: React.FC<ITodo> = ({id, title, description, isCompleted, isNecessary}) => {
    const dispatch = useAppDispatch();

    return (
        <li key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{isCompleted ? "yeap" : "nope"}</div>
            <div>{isNecessary ? "yeap" : "nope"}</div>
            <button onClick={() => dispatch(toggleComplete(id))}>click</button>
        </li>
    )
}

export default TodoItem;