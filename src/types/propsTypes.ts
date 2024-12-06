import { IPath, ITodo } from "./types.ts";
import { ReactNode } from "react";

export interface ITodoItemProps {
    todo: ITodo;
}

export interface INavLinkProps {
    link: IPath;
}

export interface IPopupProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
