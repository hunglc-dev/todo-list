import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { DragIndicator } from '@mui/icons-material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      elevation={0}
      sx={{ 
        p: 2,
        backgroundColor: 'white',
        borderRadius: 2,
        cursor: 'grab',
        border: '1px solid #e2e8f0',
        transition: 'all 0.2s ease',
        opacity: isDragging ? 0.5 : 1,
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-2px)',
          borderColor: '#cbd5e1',
          '& .drag-indicator': {
            opacity: 1,
          },
        },
        '&:active': {
          cursor: 'grabbing',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
        <DragIndicator 
          className="drag-indicator"
          sx={{ 
            color: '#94a3b8',
            fontSize: 20,
            mt: 0.2,
            opacity: 0,
            transition: 'opacity 0.2s ease',
          }} 
        />
        <Typography 
          sx={{ 
            flex: 1,
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: '#334155',
          }}
        >
          {task.content}
        </Typography>
      </Box>
    </Paper>
  );
}

export default Task;
