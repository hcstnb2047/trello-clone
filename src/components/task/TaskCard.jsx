import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { v4 as uuidv4 } from "uuid";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  // 各TaskCardに一意のIDを割り当てる
  const taskCardId = React.useMemo(() => uuidv4(), []); // コンポーネントのマウント時に一度だけIDを生成

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        taskCardId={taskCardId}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};