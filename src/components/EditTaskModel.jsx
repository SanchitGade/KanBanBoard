import { useState } from "react";

const EditTaskModal = ({
  editTask,
  setEditTask,
  setShowEditModal,
  setTasks,
}) => {
  const [title, setTitle] = useState(editTask.title);

  const [description, setDescription] = useState(editTask.description);

  // =========================
  // SAVE EDIT
  // =========================
  function handleSaveEdit() {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === editTask.id) {
          return {
            ...task,
            title,
            description,
          };
        }

        return task;
      });
    });

    setShowEditModal(false);

    setEditTask(null);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-2xl w-96">
        <h2 className="font-poppinstext-white text-2xl font-bold mb-5">Edit Task</h2>

        {/* TITLE */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full font-poppins font-extralight p-3 rounded-lg mb-4 bg-black text-white outline-none"
        />

        {/* DESCRIPTION */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full font-poppins font-extralight p-3 rounded-lg mb-4 bg-black text-white outline-none"
        />

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowEditModal(false)}
            className= "font-poppins  bg-gray-500 px-4 py-2 rounded-lg text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSaveEdit}
            className="font-poppins bg-blue-500 px-4 py-2 rounded-lg text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
