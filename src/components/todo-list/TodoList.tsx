import { useAppSelector } from "../../hooks/hooks.ts";
import TodoItem from "../todo-item/TodoItem.tsx";
import styles from "./TodoList.module.scss";
import { ITodoListProps } from "../../types/propsTypes.ts";
import TodosCounter from "../todos-counter/TodosCounter.tsx";

const TodoList: React.FC<ITodoListProps> = ({ todoType }) => {
    const todos = useAppSelector(state => state.todos);

    const filteredTodos = todos.filter(todo => {
        if (todoType === "all") return true;
        if (todoType === "uncompleted") return !todo.isCompleted;
        if (todoType === "necessary") return todo.isNecessary;
        if (todoType === "completed") return todo.isCompleted;
        return false;
    });

    const todoToRender = filteredTodos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
    });

    const totalTodos: number = todoToRender.length;

    return (
        <section className={styles.container}>
            <ul>{todoToRender.reverse()}</ul>
            {totalTodos > 0 ? <TodosCounter totalTodos={totalTodos} /> : null}
        </section>
    );
};

export default TodoList;
