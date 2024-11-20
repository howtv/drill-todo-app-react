import { useState } from "react";

export type Task = {
  title: string;
  done: boolean;
  category: string;
  deadline?: string;
};

export const useHandleTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "買い物",
      done: true,
      category: "生活",
    },
    {
      title: "メール返信",
      done: false,
      category: "仕事",
    },
    {
      title: "レポート提出",
      done: false,
      category: "仕事",
    },
  ]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task: Task) => {
    setTasks(tasks.filter((_) => _ !== task));
  };

  const setTaskDone = (task: Task, done: boolean) => {
    setTasks(
      tasks.map((_) =>
        _ !== task
          ? _
          : {
              ...task,
              done,
            }
      )
    );
  };

  return {
    tasks,
    addTask,
    removeTask,
    setTaskDone,
  };
};
