import { useDroppable } from "@dnd-kit/core";

import TaskCard from "./TaskCard";

const SectionInProgress = ({
  tasks,
  setTasks,
  setEditTask,
  setShowEditModal,
}) => {
  // =========================
  // FILTER INPROGRESS TASKS
  // =========================
  const progressTasks = tasks.filter(
    (task) => task.status === "inprogress-section",
  );

  // =========================
  // DROPPABLE
  // =========================
  const { isOver, setNodeRef } = useDroppable({
    id: "inprogress-section",
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-gray-600 w-full lg:w-1/4 min-h-screen rounded-xl p-2 m-1
        transition-all duration-300

        ${isOver ? "border-2 border-blue-400" : ""}
      `}
    >
      {/* HEADING */}
      <div className="flex justify-between p-2 mb-9 mt-3">
        <h3 className="font-poppins font-bold text-[#E0E0E0]">IN PROGRESS</h3>

        <p className="font-poppins font-medium text-[#E0E0E0]">
          ({progressTasks.length})
        </p>
      </div>

      {/* TASKS */}
      {progressTasks.map((task) => (
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

export default SectionInProgress;
