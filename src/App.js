import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Task from "./components/Task";

function App() {
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

  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No hay tareas para hacer"
      )}
    </div>
  );
}

export default App;
