import React from "react";
import { Task } from "./input/Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newTaskList = Array.from(taskList);
    const [removed] = newTaskList.splice(result.source.index, 1);
    newTaskList.splice(result.destination.index, 0, removed);
    setTaskList(newTaskList);
  };

  return (
    <div className="tasks">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              className="task-list"
            >
              {taskList.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
