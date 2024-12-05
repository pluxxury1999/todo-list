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
                <Route path={"/all"} element={<TodoList />} />
                <Route path={"*"} element={<div>not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
