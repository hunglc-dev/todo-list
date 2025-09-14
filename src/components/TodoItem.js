import React, { useState } from 'react';

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
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEdit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit">Lưu</button>
          <button type="button" onClick={() => setIsEditing(false)}>Hủy</button>
        </form>
      ) : (
        <>
          <span
            className="todo-text"
            onClick={() => toggleComplete(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Sửa</button>
          <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
