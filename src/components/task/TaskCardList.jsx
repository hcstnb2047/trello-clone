import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';

const TaskCardList = () => {
  const [taskCardsList, setTaskCards] = useState([
    {
      id:0,
      draggableId: `item-0`,
      title: 'New Task Card',
      description: 'New Task Card Description',
      completed: false,
    },
  ]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id} taskCardList={taskCardList} />
      ))}
      <AddTaskCardButton taskCardsList={taskCardsList} setTaskCards={setTaskCards} />
    </div>
  );
};

export default TaskCardList; 