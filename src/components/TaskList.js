import React from "react";
import Task from "./Task";

function TaskList({ tasks, remove }) {

  return (
      <div className="tasks">
        {tasks.map((task)=>(
            <Task key={task.text} text={task.text} category={task.category} remove={remove}/>
        ))}
      </div>
  );
}

export default TaskList;