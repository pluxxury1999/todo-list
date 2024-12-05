import { useAppSelector } from "../../hooks/hooks.ts";
import TodoItem from "../list-item/TodoItem.tsx";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos)

    const todoComps = todos.map(todo => {
        return <TodoItem id={todo.id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted} isNecessary={todo.isNecessary} />
    })

    return (
        <li>
            {todoComps}
        </li>
    )
}

export default TodoList