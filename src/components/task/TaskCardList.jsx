import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';

const TaskCardList = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: 0,
      draggableId: `item-0`,
      title: 'New Task Card',
      description: 'New Task Card Description',
      completed: false,
    },
  ]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCard) => (
        <TaskCard key={taskCard.id} taskCard={taskCard} taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList} />
      ))}
      <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
    </div>
  );
};

export default TaskCardList; 