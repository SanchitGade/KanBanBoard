import { useDraggable } from "@dnd-kit/core";

import { FaPen, FaTrash } from "react-icons/fa";

const TaskCard = ({ task, setTasks, setEditTask, setShowEditModal }) => {
  // =========================
  // DRAGGABLE
  // =========================
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  // =========================
  // DELETE TASK
  // =========================
  function handleDeleteTask() {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
  }

  // =========================
  // EDIT TASK
  // =========================
  function handleEditTask() {
    setEditTask(task);

    setShowEditModal(true);
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      group
      flex justify-between
      bg-black
      m-3
      p-4
      rounded-2xl
      transition-all duration-300
    "
    >
      {/* LEFT CONTENT */}
      <div
        {...listeners}
        {...attributes}
        className="
        flex gap-1
        cursor-grab
        w-full
      "
      >
        {/* COLOR BAR */}
        <div className="p-1">
          <div className={`${task.color} w-1.5 h-7 rounded-2xl`}></div>
        </div>

        {/* TASK CONTENT */}
        <div className="w-full p-1">
          <h5 className="font-poppins font-medium text-[#E0E0E0] text-xl">
            {task.title}
          </h5>

          <p className="font-poppins font-extralight text-xs text-[#E0E0E0] m-0.5">
            {task.description}
          </p>
        </div>
      </div>

      {/* RIGHT ACTION BUTTONS */}
      <div
        className="
        flex gap-3 items-start

        opacity-0
        translate-x-3

        group-hover:opacity-100
        group-hover:translate-x-0

        transition-all duration-300
      "
      >
        {/* EDIT */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEditTask();
          }}
          className="
          text-blue-400
          hover:text-blue-300
          transition
          cursor-pointer
        "
        >
          <FaPen />
        </button>

        {/* DELETE */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteTask();
          }}
          className="
          text-red-400
          hover:text-red-300
          transition
          cursor-pointer
        "
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
