import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Task from './Task';

function Column({ column, tasks }) {
  const { setNodeRef: sortableRef, attributes, listeners, transform, transition } = useSortable({ 
    id: column.id,
    disabled: true, // Disable sorting of columns
  });

  const { setNodeRef: droppableRef, isOver } = useDroppable({
    id: column.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getColumnColor = (columnId) => {
    const colors = {
      'column-1': { bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444', chip: '#ef4444' },
      'column-2': { bg: 'rgba(251, 191, 36, 0.1)', border: '#fbbf24', chip: '#fbbf24' },
      'column-3': { bg: 'rgba(34, 197, 94, 0.1)', border: '#22c55e', chip: '#22c55e' },
    };
    return colors[columnId] || { bg: 'rgba(148, 163, 184, 0.1)', border: '#94a3b8', chip: '#94a3b8' };
  };

  const colors = getColumnColor(column.id);

  return (
    <Box style={style}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 2.5,
          width: 320,
          minHeight: 500,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 3,
          border: `2px solid ${colors.border}`,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              color: '#1e293b',
              fontSize: '1.1rem',
            }}
          >
            {column.title}
          </Typography>
          <Chip 
            label={tasks.length}
            size="small"
            sx={{ 
              backgroundColor: colors.chip,
              color: 'white',
              fontWeight: 600,
              minWidth: 32,
            }}
          />
        </Box>
        <SortableContext items={tasks.map(task => task.id)}>
          <Box 
            ref={droppableRef}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              minHeight: 100,
              p: 1,
              borderRadius: 2,
              backgroundColor: isOver ? 'rgba(99, 102, 241, 0.1)' : colors.bg,
              border: isOver ? '2px dashed #6366f1' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            {tasks.length === 0 ? (
              <Typography 
                sx={{ 
                  textAlign: 'center',
                  color: 'text.secondary',
                  py: 4,
                  fontStyle: 'italic',
                }}
              >
                Thả task vào đây
              </Typography>
            ) : (
              tasks.map(task => <Task key={task.id} task={task} />)
            )}
          </Box>
        </SortableContext>
      </Paper>
    </Box>
  );
}

export default Column;
