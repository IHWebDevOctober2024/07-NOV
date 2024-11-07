// src/components/ToDoList.jsx

import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Documentation",
    description: "Check the documentation",
  },
  {
    _id: "2b",
    name: "Nap",
    description: "Take a nap",
  },
  {
    _id: "3c",
    name: "Enchiladas",
    description: "Eat enchiladas",
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <Summary />
      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
