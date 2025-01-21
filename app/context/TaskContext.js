"use client";
import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTaskStatus, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
