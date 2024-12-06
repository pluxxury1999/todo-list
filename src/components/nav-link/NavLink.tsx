import { INavLinkProps } from "../../types/propsTypes.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./NavLink.module.scss";

const NavLink: React.FC<INavLinkProps> = ({ link }) => {
    const navigate = useNavigate();
    const { path, hint } = link;

    return (
        <li title={hint} className={styles.linkWrapper}>
            <a
                href={path}
                onClick={e => {
                    e.preventDefault();
                    navigate(path);
                }}
            >
                <link.icon className={styles.linkIcon} />
            </a>
        </li>
    );
};

export default NavLink;
