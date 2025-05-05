import React from "react";
import { Draggable } from "react-beautiful-dnd";


export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (taskId) => {
    if (taskList) {
      setTaskList(taskList.filter((t) => t.id !== taskId));
    }
  };

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
