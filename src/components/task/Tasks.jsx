import React from "react";
import { Task } from "./input/Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskCardId, taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    console.log("handleDragEnd");
    // result.destination がない場合は処理を中断
    if (!result.destination) return;
    
    // タスクの順序変更のロジック
    const newTaskList = Array.from(taskList);
    const [removed] = newTaskList.splice(result.source.index, 1);
    newTaskList.splice(result.destination.index, 0, removed);
    setTaskList(newTaskList);
  };

  // ドロップ可能な領域のIDを生成
  // const droppableId = `taskList-${taskCardId}`;

  return (
    <div className="tasks">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppableId" type="TASK">
          {(provided) => (
            <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              className="task-list"
              style={{ minHeight: "100px" }}
            >
              {taskList.map((task, index) => (
                <Task
                  key={`${task.id}-${taskCardId}`}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  index={index}
                  taskCardId={taskCardId}
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