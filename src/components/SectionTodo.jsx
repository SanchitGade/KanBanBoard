import { useDroppable } from "@dnd-kit/core";

import TaskCard from "./TaskCard";

const SectionTodo = ({
  tasks,
  setTasks,
  setEditTask,
  setShowEditModal,
}) => {

  // FILTER TODO TASKS
  const todoTasks = tasks.filter(
    (task) => task.status === "todo-section"
  );

  // DROPPABLE
  const { isOver, setNodeRef } = useDroppable({
    id: "todo-section",
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-gray-600 w-full lg:w-1/4 min-h-screen rounded-xl p-2 m-1
        ${isOver ? "border-2 border-yellow-700" : ""}
      `}
    >

      {/* HEADING */}
      <div className="flex justify-between p-2 mb-9 mt-3">

        <h3 className="font-poppins font-bold text-[#E0E0E0]">
          TODO
        </h3>

        <p className="font-poppins font-medium text-[#E0E0E0]">
          ({todoTasks.length})
        </p>

      </div>

      {/* TASKS */}
      {todoTasks.map((task) => (

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

export default SectionTodo;