import { useDroppable } from "@dnd-kit/core";

import TaskCard from "./TaskCard";

const SectionCompleted = ({
  tasks,
  setTasks,
  setEditTask,
  setShowEditModal,
}) => {
  // =========================
  // FILTER COMPLETED TASKS
  // =========================
  const completedTasks = tasks.filter(
    (task) => task.status === "completed-section",
  );

  // =========================
  // DROPPABLE
  // =========================
  const { isOver, setNodeRef } = useDroppable({
    id: "completed-section",
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-gray-600 w-full lg:w-1/4 min-h-screen  rounded-xl p-2 m-1
        transition-all duration-300

        ${isOver ? "border-2 border-purple-500" : ""}
      `}
    >
      {/* HEADING */}
      <div className="flex justify-between p-2 mb-9 mt-3">
        <h3 className="font-poppins font-bold text-[#E0E0E0]">COMPLETED</h3>

        <p className="font-poppins font-medium text-[#E0E0E0]">
          ({completedTasks.length})
        </p>
      </div>

      {/* TASKS */}
      {completedTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          setTasks={setTasks}
          setEditTask={setEditTask}
          setShowEditModal={setShowEditModal}
        />
      ))}
    </div>
  );
};

export default SectionCompleted;
