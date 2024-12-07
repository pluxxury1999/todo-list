import { IPopupProps } from "../../types/propsTypes.ts";
import React, { useEffect } from "react";
import styles from "./Popup.module.scss";
import { IoClose } from "react-icons/io5";

const Popup: React.FC<IPopupProps> = ({ children, title, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.popupContainer}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.popupHeader}>
                    <h3>{title}</h3>
                    <button className={styles.closeButton} onClick={onClose}>
                        <IoClose />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;
