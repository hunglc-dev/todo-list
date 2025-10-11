import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { Box } from '@mui/material';
import useTasks from '../hooks/useTasks';
import Column from './Column';

function Board() {
  const { data, setData } = useTasks();

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    // Find which column the active item is in
    let activeContainer = null;
    Object.keys(data.columns).forEach(columnId => {
      if (data.columns[columnId].taskIds.includes(active.id)) {
        activeContainer = columnId;
      }
    });

    // Find which column the over item is in (or if over is a column)
    let overContainer = null;
    if (data.columns[over.id]) {
      // Dropped directly on a column
      overContainer = over.id;
    } else {
      // Dropped on a task, find its column
      Object.keys(data.columns).forEach(columnId => {
        if (data.columns[columnId].taskIds.includes(over.id)) {
          overContainer = columnId;
        }
      });
    }

    if (!activeContainer || !overContainer) return;

    if (activeContainer === overContainer) {
      // Moving within the same column
      const column = data.columns[activeContainer];
      const oldIndex = column.taskIds.indexOf(active.id);
      const newIndex = column.taskIds.indexOf(over.id);

      if (oldIndex === newIndex) return;

      const newTaskIds = Array.from(column.taskIds);
      const [removed] = newTaskIds.splice(oldIndex, 1);
      newTaskIds.splice(newIndex, 0, removed);

      setData({
        ...data,
        columns: {
          ...data.columns,
          [activeContainer]: {
            ...column,
            taskIds: newTaskIds,
          },
        },
      });
    } else {
      // Moving to a different column
      const startColumn = data.columns[activeContainer];
      const finishColumn = data.columns[overContainer];

      const startTaskIds = Array.from(startColumn.taskIds);
      const taskIndex = startTaskIds.indexOf(active.id);
      startTaskIds.splice(taskIndex, 1);

      const finishTaskIds = Array.from(finishColumn.taskIds);
      // If dropped on a task, insert at that position
      if (data.columns[over.id]) {
        // Dropped on empty column, add to end
        finishTaskIds.push(active.id);
      } else {
        // Dropped on a task, insert at that position
        const overIndex = finishTaskIds.indexOf(over.id);
        finishTaskIds.splice(overIndex, 0, active.id);
      }

      setData({
        ...data,
        columns: {
          ...data.columns,
          [activeContainer]: {
            ...startColumn,
            taskIds: startTaskIds,
          },
          [overContainer]: {
            ...finishColumn,
            taskIds: finishTaskIds,
          },
        },
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Box sx={{ 
        display: 'flex', 
        gap: 3,
        overflowX: 'auto',
        pb: 2,
        '&::-webkit-scrollbar': {
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 10,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 10,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          },
        },
      }}>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Box>
    </DndContext>
  );
}

export default Board;
