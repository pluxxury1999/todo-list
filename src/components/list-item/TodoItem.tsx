import { useAppDispatch } from "../../hooks/hooks.ts";
import {
    toggleComplete,
    toggleNecessary,
} from "../../store/todos/todos.slice.ts";
import React from "react";
import { ITodoItemProps } from "../../types/propsTypes.ts";
import { FaCheck } from "react-icons/fa";
import styles from "./TodoItem.module.scss";

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    const { id, title, description, isCompleted, isNecessary } = todo;

    return (
        <li key={id} className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <div
                    className={`${styles.iconContainer} ${isCompleted ? "text-green-400" : "text-zinc-300"}`}
                    onClick={() => dispatch(toggleComplete(id))}
                >
                    <FaCheck />
                </div>
                <div className={styles.contentContainer}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.controlsWrapper}>
                <div>{isCompleted ? "yeap" : "nope"}</div>
                <div>{isNecessary ? "yeap" : "nope"}</div>
                <button onClick={() => dispatch(toggleNecessary(id))}>
                    click
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
