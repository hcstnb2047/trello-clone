import React from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
        <TaskCardTitle />
        <TaskCardDeleteButton />
        <TaskAddInput />
        <Tasks />
    </div>
  );
};
