import React, { useState } from "react";

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    // カード追加
    setTaskList([...taskList, {
      id: taskList.length + 1,
      text: inputText,
    }]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="task-add-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
