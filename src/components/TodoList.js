import React, { useState } from 'react';
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
    <div className="todo-list">
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Thêm task mới..."
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
