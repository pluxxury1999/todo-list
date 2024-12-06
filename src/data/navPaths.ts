import { IPath } from "../types/types.ts";
import { IoAlert } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { MdCheck } from "react-icons/md";

export const navPaths: Array<IPath> = [
    {
        path: "/all",
        label: "All",
        hint: "All Todos",
        icon: BsList,
    },
    {
        path: "/completed",
        label: "Completed",
        hint: "Completed Todos",
        icon: MdCheck,
    },
    {
        path: "/necessary",
        label: "Necessary",
        hint: "Necessary Todos",
        icon: IoAlert,
    },
];
