import styles from "./Header.module.scss";
import NavBar from "../navbar/NavBar.tsx";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import Popup from "../pop-up/PopUp.tsx";

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
            <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>Popup content</div>
            </Popup>
        </>
    );
};

export default Header;
