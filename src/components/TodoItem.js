import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField, Button, Box } from '@mui/material';
import { Edit, Delete, Save } from '@mui/icons-material';

function TodoItem({ todo, updateTodo, deleteTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        isEditing ? (
          <IconButton edge="end" aria-label="save" onClick={handleEdit}>
            <Save />
          </IconButton>
        ) : (
          <Box>
            <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <Delete />
            </IconButton>
          </Box>
        )
      }
    >
      {isEditing ? (
        <Box component="form" onSubmit={handleEdit} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="standard"
            fullWidth
            value={editText}
            onChange={e => setEditText(e.target.value)}
            autoFocus
          />
        </Box>
      ) : (
        <>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onClick={() => toggleComplete(todo.id)}
          />
          <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
