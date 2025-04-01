import React, { useState } from "react";


function Home() {
  const [tasks, setTasks] = useState([
    "Drink 4 litres of water",
    "Read a book",
    "Work (9am - 5pm)",
    "Meal prep"
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-semibold mb-6">Your potential is endless!</h2>

      <div className="bg-[#373A47] p-8 rounded-xl shadow-md w-full max-w-lg">
        <h3 className="text-xl mb-4 font-semibold text-white">To-Do List:</h3>

        <ol className="list-decimal list-inside text-lg leading-8 text-white">
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="text"
                value={task}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                className="bg-transparent border-b border-gray-400 focus:outline-none w-full text-white"

              />
            </li>
          ))}
        </ol>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task"
            className="p-2 rounded-lg w-full focus:outline-none text-black"
          />
          <button
            onClick={handleAddTask}
            className="bg-white text-[#373A47] px-4 py-2 rounded-lg font-semibold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
