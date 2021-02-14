import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'cita con medico',
        day: 'feb 15th a las 1:30pm',
        reminder: true,        
    },
    {
        id: 2,
        text: 'cita en colegio',
        day: 'feb 18th a las 9:30am',
        reminder: true,        
    },
    {
        id: 3,
        text: 'comprar comida',
        day: 'feb 20th a las 11:00am',
        reminder: false,        
    }

])
  return (
    <div className="App">
      <Header 
      
      />
      <Tasks 
      tasks={tasks}
      />
  
    </div>
  );
}

export default App;
