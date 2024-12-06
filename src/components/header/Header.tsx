import styles from "./Header.module.scss";
import NavBar from "../navbar/NavBar.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>MyTodo</h1>
            <NavBar />
        </header>
    );
};

export default Header;
