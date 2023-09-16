import { uuid } from "uuidv4";
import { create } from "zustand";

const store = (set: any) => ({
  tasks: [
    {
      id: uuid(),
      title: "task1",
      status: "todo",
    },
    {
      id: uuid(),
      title: "task2",
      status: "inprogress",
    },
    {
      id: uuid(),
      title: "task3",
      status: "done",
    },
  ],
  addTask: (id: string, title: string, status: string) =>
    set((state: any) => ({ tasks: [...state.tasks, { id, title, status }] })),
  deleteTask: (id: string) =>
    set((state: any) => ({
      tasks: state.tasks.filter((task: any) => task.id !== id),
    })),
});

export const useColumnStore = create(store);
