import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import SectionCompleted from "./components/SectionCompleted";
import SectionInProgress from "./components/SectionInProgress";
import SectionTodo from "./components/SectionTodo";

import DragHint from "./components/DragHint";
import TaskModal from "./components/TaskModel";
import EditTaskModal from "./components/EditTaskModel";

import { DndContext } from "@dnd-kit/core";

const App = () => {

  // =========================
  // HINT STATES
  // =========================
  const [showHint, setShowHint] = useState(true);

  // =========================
  // MODAL STATES
  // =========================
  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editTask, setEditTask] = useState(null);

  // =========================
  // TASK STATE
  // =========================
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // =========================
  // SAVE LOCAL STORAGE
  // =========================
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // =========================
  // DRAG END
  // =========================
  function handleDragEnd(event) {
    setShowHint(false);
    const { active, over } = event;

    if (!over) return;

    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === active.id) {
          let updatedColor = "";

          if (over.id === "todo-section") {
            updatedColor = "bg-orange-400";
          } else if (over.id === "inprogress-section") {
            updatedColor = "bg-blue-400";
          } else if (over.id === "completed-section") {
            updatedColor = "bg-purple-400";
          }

          return {
            ...task,
            status: over.id,
            color: updatedColor,
          };
        }

        return task;
      });
    });
  }

  return (
    <div className="min-h-screen bg-black">
      {/* NAVBAR */}
      <Navbar setShowModal={setShowModal} />

      <DragHint showHint={showHint} />

      {/* CREATE TASK MODAL */}
      {showModal && (
        <TaskModal setShowModal={setShowModal} setTasks={setTasks} />
      )}

      {/* EDIT TASK MODAL */}
      {showEditModal && (
        <EditTaskModal
          editTask={editTask}
          setEditTask={setEditTask}
          setShowEditModal={setShowEditModal}
          setTasks={setTasks}
        />
      )}

      {/* BOARD */}
      <DndContext onDragEnd={handleDragEnd}>
        <section className="flex flex-col lg:flex-row gap-5 justify-center p-5 mt-8">
          <SectionTodo
            tasks={tasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
            setShowEditModal={setShowEditModal}
          />

          <SectionInProgress
            tasks={tasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
            setShowEditModal={setShowEditModal}
          />

          <SectionCompleted
            tasks={tasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
            setShowEditModal={setShowEditModal}
          />
        </section>
      </DndContext>
    </div>
  );
};

export default App;
