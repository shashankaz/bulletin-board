import React, { useState, useEffect } from "react";
import styles from "./DGC.module.css";
import { MdDelete } from "react-icons/md";

const DGC = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    setTasks((prevTasks) => [...prevTasks, input.trim()]);
    setInput("");
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Daily Growth Checklist</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className={styles.tasks}>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className={styles.task}>
                <span>{task}</span>
                <button onClick={() => handleDeleteTask(index)}>
                  <MdDelete size={24} />
                </button>
              </div>
            ))
          ) : (
            <p>No tasks added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DGC;
