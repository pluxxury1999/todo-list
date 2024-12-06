import { IconType } from "react-icons";

export interface ITodo {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isNecessary: boolean;
}

export interface IPath {
    path: string;
    label: string;
    hint: string;
    icon: IconType;
}
