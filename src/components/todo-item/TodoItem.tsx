import { useAppDispatch } from "../../hooks/hooks.ts";
import {
    removeTodo,
    toggleComplete,
    toggleNecessary,
} from "../../store/todos/todos.slice.ts";
import React from "react";
import { ITodoItemProps } from "../../types/propsTypes.ts";
import { FaCheck } from "react-icons/fa";
import styles from "./TodoItem.module.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAlert } from "react-icons/io5";

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    const { id, title, description, isCompleted, isNecessary } = todo;

    const wrapperCompletedStyles: string = isCompleted
        ? "opacity-75 scale-95"
        : "";
    const wrapperNecessaryStyles: string = isNecessary
        ? "border-rose-600 shadow-rose-300"
        : "border-purple-600 shadow-purple-300";

    const necessaryHandler = () => {
        if (isCompleted) {
            return;
        }
        dispatch(toggleNecessary(id));
    };

    return (
        <li
            key={id}
            className={`${styles.wrapper} ${wrapperCompletedStyles} ${wrapperNecessaryStyles}`}
        >
            <div className={styles.contentWrapper}>
                <div
                    className={`${styles.iconContainer} ${isCompleted ? "text-green-400 hover:text-green-500" : "text-zinc-300 hover:text-zinc-400"}`}
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
                <IoAlert
                    className={`${styles.necessatyBtn} ${isNecessary ? "text-rose-600" : "text-zinc-400"}`}
                    onClick={necessaryHandler}
                />
                <FaRegTrashCan
                    className={`${styles.removeBtn} ${"text-zinc-400"}`}
                    onClick={() => {
                        dispatch(removeTodo(id));
                    }}
                />
            </div>
        </li>
    );
};

export default TodoItem;
