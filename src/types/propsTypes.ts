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
    title: string;
    onClose: () => void;
}

export interface ITodoListProps {
    todoType: "all" | "completed" | "necessary" | "uncompleted";
}

export interface ITodosCounterProps {
    totalTodos: number;
}
