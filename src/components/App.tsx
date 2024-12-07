import Header from "./header/Header.tsx";
import TodoList from "./todo-list/TodoList.tsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={"/"} element={<Navigate to={"/all"} replace />} />
                <Route path={"/all"} element={<TodoList todoType={"all"} />} />
                <Route
                    path={"/uncompleted"}
                    element={<TodoList todoType={"uncompleted"} />}
                />
                <Route
                    path={"/necessary"}
                    element={<TodoList todoType={"necessary"} />}
                />
                <Route
                    path={"/completed"}
                    element={<TodoList todoType={"completed"} />}
                />
                <Route path={"*"} element={<div>Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
