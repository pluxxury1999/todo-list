import React from "react";
import { ITodosCounterProps } from "../../types/propsTypes.ts";
import styles from "./TodosCounter.module.scss";

const TodosCounter: React.FC<ITodosCounterProps> = ({ totalTodos }) => {
    return (
        <div className={styles.counterWrapper}>
            Total: <span>{totalTodos}</span>
        </div>
    );
};

export default TodosCounter;
