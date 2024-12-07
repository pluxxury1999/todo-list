import { IPath } from "../types/types.ts";
import { IoAlert } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export const navPaths: Array<IPath> = [
    {
        path: "/all",
        label: "All",
        hint: "All Todos",
        icon: BsList,
    },
    {
        path: "/uncompleted",
        label: "Uncompleted",
        hint: "Uncompleted Todos",
        icon: IoClose,
    },
    {
        path: "/necessary",
        label: "Necessary",
        hint: "Necessary Todos",
        icon: IoAlert,
    },
    {
        path: "/completed",
        label: "Completed",
        hint: "Completed Todos",
        icon: MdCheck,
    },
];
