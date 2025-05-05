import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (taskId) => {
    console.log("handleDelete called with taskId:", taskId);
    console.log("Current taskList:", taskList);
    
    if (taskList) {
      setTaskList(taskList.filter((t) => t.id !== taskId));
      console.log("Updated taskList:", taskList.filter((t) => t.id !== taskId));
    } else {
      console.log("taskList is undefined");
    }
  };

  console.log("Task component rendered with task:", task);
  
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button 
        className="taskTrashButton" 
        onClick={() => {
          console.log("Button clicked");
          handleDelete(task.id);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
