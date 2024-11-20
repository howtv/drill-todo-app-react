import React, { useState } from "react";
import { useHandleTasks } from "./useHandleTasks";
import "./App.css";

const App: React.FC = () => {
  const { tasks, addTask, removeTask, setTaskDone } = useHandleTasks();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("生活");
  const [filter, setFilter] = useState("");
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
          カテゴリ:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="生活">生活</option>
            <option value="仕事">仕事</option>
            <option value="趣味">趣味</option>
          </select>
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
                category,
                done: false,
                ...(isDeadline && { deadline }),
              });
              setTitle("");
            }}
          />
        </div>
      </div>
      <div className="filter">
        カテゴリで絞り込む:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">すべて表示</option>
          <option value="生活">生活</option>
          <option value="仕事">仕事</option>
          <option value="趣味">趣味</option>
        </select>
      </div>
      <ul>
        {tasks
          .filter((task) => !filter || task.category === filter)
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
                <span>{task.category}</span>
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
