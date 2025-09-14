import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todos';

function useTodos() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return { todos, addTodo, updateTodo, deleteTodo, toggleComplete };
}

export default useTodos;
