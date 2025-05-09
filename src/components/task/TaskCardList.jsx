import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const TaskCardList = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: uuidv4(),
      title: 'New Task Card',
      description: 'New Task Card Description',
      completed: false,
    },
  ]);

  const handleDragEnd = (result) => {
    // ドロップ先がない場合は処理を中断
    if (!result.destination) return;

    // タスクカードの順序を変更
    const newTaskCardsList = Array.from(taskCardsList);
    const [removed] = newTaskCardsList.splice(result.source.index, 1);
    newTaskCardsList.splice(result.destination.index, 0, removed);

    // 新しい順序でタスクカードリストを更新
    setTaskCardsList(newTaskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal" type="TASKCARD">
        {(provided) => (
          <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((taskCardItem, index) => (
              <TaskCard
                key={taskCardItem.id}
                index={index}
                taskCard={{
                  id: taskCardItem.id,
                  title: taskCardItem.title,
                  description: taskCardItem.description,
                  completed: taskCardItem.completed
                }}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCardList; 