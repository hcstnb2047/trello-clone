import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTaskCardButton = ({ taskCardsList, setTaskCards }) => {
  const addTaskCardList = () => {
    const taskCardId = uuidv4();
    setTaskCards([...taskCardsList, { 
      id:  taskCardId, 
      draggableId: `item-${taskCardId}`,
      title: 'New Task Card', 
      description: 'New Task Card Description', 
      completed: false 
    }]);
  };
  return <div className="addTaskCardButtonArea">
    <button className="addTaskCardButton" onClick={addTaskCardList}>+</button>
    </div>
};

export default AddTaskCardButton;
