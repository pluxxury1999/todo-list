import styles from "./Header.module.scss";
import NavBar from "../navbar/NavBar.tsx";
import { IoIosAdd } from "react-icons/io";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>MyTodo</h1>
            <button title={"Add Todo"}>
                <IoIosAdd className={styles.icon} />
                {"Add Todo"}
            </button>
            <NavBar />
        </header>
    );
};

export default Header;
