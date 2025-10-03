import React, { useState } from 'react';
import { Button, Modal, Form, InputGroup, Card, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo, updateTodo, deleteTodo, toggleComplete }) {
  const [input, setInput] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
      setShowAddModal(false);
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="todo-list">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-2">My Tasks</h5>
              <div className="d-flex gap-2">
                <Badge bg="primary">{todos.length} Total</Badge>
                <Badge bg="success">{completedCount} Completed</Badge>
                <Badge bg="warning" text="dark">{pendingCount} Pending</Badge>
              </div>
            </div>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Add a new task</Tooltip>}
            >
              <Button 
                variant="primary" 
                onClick={() => setShowAddModal(true)}
                className="d-flex align-items-center"
              >
                <FaPlus className="me-2" />
                Add Task
              </Button>
            </OverlayTrigger>
          </div>

          {todos.length === 0 ? (
            <div className="text-center text-muted py-5">
              <p className="fs-5">No tasks yet!</p>
              <p>Click "Add Task" to get started.</p>
            </div>
          ) : (
            <div className="todo-items-container">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                />
              ))}
            </div>
          )}
        </Card.Body>
      </Card>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group>
              <Form.Label>Task Description</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Enter your task here..."
                  autoFocus
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoList;
