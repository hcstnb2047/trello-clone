import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
// import { v4 as uuidv4 } from "uuid"; // TaskCard 内での uuidv4 の使用は不要になる可能性
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ taskCard, index, taskCardsList, setTaskCardsList }) => { // index を props で受け取る
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  // 各TaskCardに一意のIDを割り当てる
  // const taskCardId = React.useMemo(() => uuidv4(), []); // このIDはDraggableのIDとは異なるため、必要に応じて残すか検討

  return (
    <Draggable draggableId={String(taskCard.id)} index={index} type="TASKCARD">
      {(provided, snapshot) => (
        <div className="taskCard"
        ref={provided.innerRef}
        {...provided.draggableProps}>
          <div className="taskCardTitleAndTaskCardDeleteButtonArea"
          {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton taskCardId={taskCard.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            taskCardId={taskCard.id} // ここは taskCard.id を引き続き使用（内部のTasksコンポーネントが何を期待しているかによる）
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};