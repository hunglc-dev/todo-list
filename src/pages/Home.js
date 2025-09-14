import React from 'react';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

function Home() {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete
  } = useTodos();

  return (
    <TodoList
      todos={todos}
      addTodo={addTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
    />
  );
}

export default Home;
