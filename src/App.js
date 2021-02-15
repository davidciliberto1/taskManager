import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "cita con medico",
      day: "feb 15th a las 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "cita en colegio",
      day: "feb 18th a las 9:30am",
      reminder: true,
    },
    {
      id: 3,
      text: "comprar comida",
      day: "feb 20th a las 11:00am",
      reminder: false,
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder

  const toggleReminder = (id) => setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No hay tareas para hacer"
      )}
    </div>
  );
}

export default App;
