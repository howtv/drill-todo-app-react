import { useState, useEffect } from "react";

export type Task = {
  title: string;
  done: boolean;
  category: string;
  deadline?: string;
};

export const useHandleTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setIsLoaded] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    const tasksJson = localStorage.getItem("tasks");
    if (tasksJson) {
      setTasks(JSON.parse(tasksJson));
    } else {
      setTasks([
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
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [loaded, tasks]);

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
