import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index, taskCardId }) => {
  const handleDelete = (taskId) => {
    if (taskList) {
      setTaskList(taskList.filter((t) => t.id !== taskId));
    }
  };

  // ドラッグ可能な要素のIDを生成
  const draggableId = `task-${task.id}-${taskCardId}`;

  return (
    <Draggable draggableId={draggableId} index={index} type="TASK">
      {(provided, snapshot) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? "#f0f0f0" : "white"
          }}
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