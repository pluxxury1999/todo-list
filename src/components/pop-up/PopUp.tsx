import { IPopupProps } from "../../types/propsTypes.ts";
import React from "react";

const Popup: React.FC<IPopupProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>
                <button onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
