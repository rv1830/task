'use client';
import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AdminDashboard = () => {
  const { tasks, addTask, removeTask } = useTasks();

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDesc,
      deadline: taskDeadline,
      status: "Pending",
    };

    addTask(newTask);

    setTaskName("");
    setTaskDesc("");
    setTaskDeadline("");

    setIsFormVisible(false);
  };

  const handleDelete = (taskId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      removeTask(taskId);
    }
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gradient-to-r from-purple-600 to-gray-600 text-gray-50 h-screen p-6">
        <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 mb-6 w-full"
        >
          Create Task
        </button>
      </div>

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <div className="text-center">
          <p className="text-lg mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Welcome, Admin! Here you can manage tasks, users, and more.
          </p>

          {isFormVisible && (
            <form
              className="mt-6 space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-md font-semibold text-left mx-2 text-black">Task Name</label>
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-md font-semibold text-left mx-2 text-black">Task Description</label>
                <textarea
                  value={taskDesc}
                  onChange={(e) => setTaskDesc(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-md text-black font-semibold text-left mx-2 text-black">Deadline</label>
                <input
                  type="date"
                  value={taskDeadline}
                  onChange={(e) => setTaskDeadline(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </form>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-600">{task.name}</h3>
                <p className="text-gray-700">{task.description}</p>
                <p className="text-sm text-purple-800">Deadline: {task.deadline}</p>
                <p className="text-gray-700 font-semibold">Status: {task.status}</p>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all"
                >
                  Delete Task
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
