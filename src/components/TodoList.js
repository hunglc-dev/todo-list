import React, { useState } from 'react';
import { TextField, Button, List, Paper, Typography, Box } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo, updateTodo, deleteTodo, toggleComplete }) {
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Todos
      </Typography>
      <Box component="form" onSubmit={handleAdd} sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Add a new task"
          variant="outlined"
          fullWidth
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
          Add Task
        </Button>
      </Box>
      <List>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
