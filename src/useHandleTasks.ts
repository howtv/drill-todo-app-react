import { useState, useEffect } from "react";
import {
  getFirestoreTasks,
  addFirestoreTask,
  setFirestoreTaskDone,
  removeFirestoreTask,
} from "./repository";

export type DraftTask = {
  title: string;
  done: boolean;
  category: string;
  deadline?: string;
};

export type Task = DraftTask & {
  id: string;
};

export const useHandleTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const update = async () => {
    setTasks(await getFirestoreTasks());
  };

  useEffect(() => {
    update();
  }, []);

  const addTask = async (task: DraftTask) => {
    await addFirestoreTask(task);
    await update();
  };

  const removeTask = async (task: Task) => {
    await removeFirestoreTask(task);
    await update();
  };

  const setTaskDone = async (task: Task, done: boolean) => {
    await setFirestoreTaskDone(task, done);
    await update();
  };

  return {
    tasks,
    addTask,
    removeTask,
    setTaskDone,
  };
};
