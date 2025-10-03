import React, { useState } from 'react';
import { Button, Modal, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash, FaCheckCircle, FaCircle } from 'react-icons/fa';

function TodoItem({ todo, updateTodo, deleteTodo, toggleComplete }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setShowEditModal(false);
    }
  };

  const handleOpenEdit = () => {
    setEditText(todo.text);
    setShowEditModal(true);
  };

  return (
    <>
      <div 
        className={`todo-item-card d-flex align-items-center justify-content-between p-3 mb-2 border rounded ${todo.completed ? 'bg-light' : 'bg-white'} hover-shadow`}
      >
        <div className="d-flex align-items-center flex-grow-1" style={{ cursor: 'pointer' }} onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? (
            <FaCheckCircle className="text-success me-3" size={24} />
          ) : (
            <FaCircle className="text-muted me-3" size={24} />
          )}
          <span 
            className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
          >
            {todo.text}
          </span>
        </div>
        <div className="d-flex gap-2">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Edit task</Tooltip>}
          >
            <Button 
              variant="outline-primary" 
              size="sm"
              onClick={handleOpenEdit}
            >
              <FaEdit />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Delete task</Tooltip>}
          >
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              <FaTrash />
            </Button>
          </OverlayTrigger>
        </div>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEdit}>
            <Form.Group>
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItem;
