import React from "react";

export const TaskCardDeleteButton = ({taskCardId, taskCardsList, setTaskCardsList}) => {
  const deleteTaskCardButton = (id) => {
    console.log('taskCardId:', id);
    console.log('taskCardsList:', taskCardsList);
    if (!taskCardsList) return;
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }
  return (
    <button className="taskCardDeleteButton" onClick={() => deleteTaskCardButton(taskCardId)}>
      <i className="fa-regular fa-circle-xmark"></i>
    </button>
  );
}; 