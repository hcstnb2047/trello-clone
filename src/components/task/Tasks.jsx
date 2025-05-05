import React from "react";
import { Task } from "./input/task";
export const Tasks = ({ taskList ,setTaskList}) => {
  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <div key={index}>
          <Task key={task.id} task={task} tasklist={taskList} setTaskList={setTaskList}/>
        </div>
      ))}
    </div>
  );
};
