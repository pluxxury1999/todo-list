import NavLink from "../nav-link/NavLink";
import { navPaths } from "../../data/navPaths.ts";
import { IPath } from "../../types/types.ts";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    const linkItems = navPaths.map((link: IPath) => (
        <NavLink key={link.path} link={link} />
    ));

    return (
        <nav className={styles.container}>
            <ul>{linkItems}</ul>
        </nav>
    );
};

export default NavBar;
