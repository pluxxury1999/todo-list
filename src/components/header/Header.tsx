import styles from "./Header.module.scss";
import NavBar from "../navbar/NavBar.tsx";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import Popup from "../pop-up/PopUp.tsx";
import AddTodoForm from "../add-todo-form/AddTodoForm.tsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const PopupHandler = () => {
        setIsOpen(true);
    };

    return (
        <>
            <header className={styles.header}>
                <h1>MyTodo</h1>
                <button title={"Add Todo"} onClick={PopupHandler}>
                    <IoIosAdd className={styles.icon} />
                    {"Add Todo"}
                </button>
                <NavBar />
            </header>
            <Popup
                title={"Add Todo"}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <AddTodoForm />
            </Popup>
        </>
    );
};

export default Header;
