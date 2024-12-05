import { ITodo } from "../types/types.ts";

export const initialTodos: Array<ITodo> = [
    {
        id: "1",
        title: "Prepare meeting agenda",
        description: "Outline key topics and distribute agenda to participants before the meeting.",
        isCompleted: false,
        isNecessary: true
    },
    {
        id: "2",
        title: "Update project documentation",
        description: "Review and update the project plan, timelines, and resource allocation.",
        isCompleted: false,
        isNecessary: true
    },
    {
        id: "3",
        title: "Schedule team feedback session",
        description: "Organize a session to gather feedback from team members on the current project.",
        isCompleted: false,
        isNecessary: false
    },
    {
        id: "4",
        title: "Research new tools",
        description: "Look into new productivity tools that could improve team efficiency.",
        isCompleted: false,
        isNecessary: false
    },
    {
        id: "5",
        title: "Organize workspace",
        description: "Declutter and organize the workspace for better productivity.",
        isCompleted: false,
        isNecessary: true
    }
];
