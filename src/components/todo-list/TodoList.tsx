import { useAppSelector } from "../../hooks/hooks.ts";
import TodoItem from "../list-item/TodoItem.tsx";
import styles from "./TodoList.module.scss";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos);

    return (
        <section className={styles.container}>
            <ul>
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} />;
                })}
            </ul>
        </section>
    );
};

export default TodoList;
