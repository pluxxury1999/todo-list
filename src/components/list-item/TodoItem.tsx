import { useAppDispatch } from "../../hooks/hooks.ts";
import { toggleComplete } from "../../store/todos/todos.slice.ts";
import React from "react";
import { ITodoItemProps } from "../../types/propsTypes.ts";

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    const { id, title, description, isCompleted, isNecessary } = todo;

    return (
        <li key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{isCompleted ? "yeap" : "nope"}</div>
            <div>{isNecessary ? "yeap" : "nope"}</div>
            <button onClick={() => dispatch(toggleComplete(id))}>click</button>
        </li>
    );
};

export default TodoItem;
