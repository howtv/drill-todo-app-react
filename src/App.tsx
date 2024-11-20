import React, { useState } from "react";
import { useHandleTasks } from "./useHandleTasks";
import "./App.css";

const App: React.FC = () => {
  const { tasks, addTask, removeTask, setTaskDone } = useHandleTasks();
  const [title, setTitle] = useState("");
  const [isDeadline, setIsDeadline] = useState(false);
  const [deadline, setDeadline] = useState(
    new Date().toISOString().slice(0, 10)
  );

  return (
    <>
      <div className="form">
        <div>
          <label>
            期限を設定:
            <input
              type="checkbox"
              checked={isDeadline}
              onChange={(e) => setIsDeadline(e.target.checked)}
            />
          </label>
          {isDeadline && (
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          )}
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="button"
            value="追加"
            onClick={() => {
              addTask({
                title,
                done: false,
                ...(isDeadline && { deadline }),
              });
              setTitle("");
            }}
          />
        </div>
      </div>
      <ul>
        {tasks
          .sort((a, b) => ((a.deadline ?? "") < (b.deadline ?? "") ? -1 : 1))
          .map((task, i) => (
            <li
              key={i}
              {...(task.deadline &&
                task.deadline < new Date().toISOString().slice(0, 10) && {
                  className: "expired",
                })}
            >
              <label>
                {task.deadline && <p>期限: {task.deadline}</p>}
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={(e) => setTaskDone(task, e.target.checked)}
                />
                {task.title}
              </label>
              <button onClick={() => removeTask(task)}>×</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
