import { useState } from "react";

const TaskModal = ({ setShowModal, setTasks }) => {
  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Create Task
  function handleCreateTask() {
    if (!title || !description) return;

    const newTask = {
      id: Date.now().toString(),

      title,

      description,

      status: "todo-section",

      color: "bg-orange-400",
    };

    // Add task into state
    setTasks((prev) => [...prev, newTask]);

    // Close modal
    setShowModal(false);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-2xl w-[90%] sm:w-96">
        <h2 className="font-poppins text-white text-2xl font-bold mb-5">Create Task</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full font-poppins font-extralight p-3 rounded-lg mb-4 bg-black text-white outline-none"
        />

        {/* Description */}
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full font-poppins font-extralight p-3 rounded-lg mb-4 bg-black text-white outline-none"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowModal(false)}
            className="font-poppins  bg-gray-500 px-4 py-2 rounded-lg text-white"
          >
            Cancel
          </button>   

          <button
            onClick={handleCreateTask}
            className="font-poppins bg-orange-500 px-4 py-2 rounded-lg text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
