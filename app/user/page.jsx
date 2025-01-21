// 'use client';
// import React, { useState } from "react";
// import { useTasks } from "../context/TaskContext";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_51QjmB9JdAaRZB21EvLh2BTT30G0jztPi07FnPhm7zPPqDFcSLECKuVg2DfhqV2eSnJkmeUICYxtM3VgPACTzna0100TqTveSBU");

// const User = () => {
//   const { tasks, updateTaskStatus } = useTasks();
//   const [status, setStatus] = useState({});

//   const handleStatusChange = (taskId, newStatus) => {
//     setStatus((prevStatus) => ({
//       ...prevStatus,
//       [taskId]: newStatus,
//     }));
//     updateTaskStatus(taskId, newStatus);
//   };

//   const handleUpgrade = async () => {
//     const stripe = await stripePromise;

//     const response = await fetch("/api/checkout", {
//       method: "POST",
//     });

//     const session = await response.json();

//     const { error } = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (error) {
//       console.error("Stripe error:", error);
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-64 bg-indigo-600 text-white h-screen flex flex-col p-4">
//         <div className="text-2xl font-bold mb-6"></div>
//         <nav className="flex-1">
//           <ul className="space-y-4">
//             <li className=" p-4 rounded">
//               <h1 className="text-4xl font-bold text-center mb-8 text-indigo-300">User Dashboard</h1>
//             </li>
//           </ul>
//         </nav>

//         <button
//           onClick={handleUpgrade}
//           className="mt-auto py-3 px-6 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
//         >
//           Upgrade to Premium
//         </button>
//       </div>

//       <div className="flex-1 p-6 bg-gray-50 min-h-screen">
//         <div className="text-center">
//           <p className="text-xl text-gray-600">Welcome, User! Here are your</p>

//           <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Assigned Tasks</h2>
//             <ul className="flex flex-wrap justify-center gap-6">
//               {tasks.length === 0 ? (
//                 <li className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-500 text-center">
//                   No tasks assigned.
//                 </li>
//               ) : (
//                 tasks.map((task) => (
//                   <li
//                     key={task.id}
//                     className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all w-64 h-64"
//                   >
//                     <div className="flex flex-col gap-4 h-full">
//                       <h3 className="text-xl font-semibold text-indigo-600">{task.name}</h3>
//                       <p className="text-gray-800">{task.description}</p>
//                       <p className="text-sm text-purple-800">Deadline: {task.deadline}</p>
//                       <div className="flex justify-end mt-4">
//                         <label htmlFor={`status-${task.id}`} className="mr-4 text-indigo-600">Status:</label>
//                         <select
//                           id={`status-${task.id}`}
//                           value={status[task.id] || task.status}
//                           onChange={(e) => handleStatusChange(task.id, e.target.value)}
//                           className="px-4 py-2 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
//                         >
//                           <option value="Pending">Pending</option>
//                           <option value="In Progress">In Progress</option>
//                           <option value="Completed">Completed</option>
//                         </select>
//                       </div>
//                     </div>
//                   </li>
//                 ))
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User;




'use client';
import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const User = () => {
  const { tasks, updateTaskStatus } = useTasks();
  const [status, setStatus] = useState({});

  const handleStatusChange = (taskId, newStatus) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: newStatus,
    }));
    updateTaskStatus(taskId, newStatus);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-indigo-600 text-white h-screen flex flex-col p-4">
        <div className="text-2xl font-bold mb-6"></div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className=" p-4 rounded">
              <h1 className="text-4xl font-bold text-center mb-8 text-indigo-300">User Dashboard</h1>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <div className="text-center">
          <p className="text-xl text-gray-600">Welcome, User! Here are your</p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Assigned Tasks</h2>
            <ul className="flex flex-wrap justify-center gap-6">
              {tasks.length === 0 ? (
                <li className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-500 text-center">
                  No tasks assigned.
                </li>
              ) : (
                tasks.map((task) => (
                  <li
                    key={task.id}
                    className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all w-64 h-64"
                  >
                    <div className="flex flex-col gap-4 h-full">
                      <h3 className="text-xl font-semibold text-indigo-600">{task.name}</h3>
                      <p className="text-gray-800">{task.description}</p>
                      <p className="text-sm text-purple-800">Deadline: {task.deadline}</p>
                      <div className="flex justify-end mt-4">
                        <label htmlFor={`status-${task.id}`} className="mr-4 text-indigo-600">Status:</label>
                        <select
                          id={`status-${task.id}`}
                          value={status[task.id] || task.status}
                          onChange={(e) => handleStatusChange(task.id, e.target.value)}
                          className="px-4 py-2 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

