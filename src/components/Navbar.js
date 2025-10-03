import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaCheckCircle className="me-2" size={28} />
          <span className="fw-bold">Todo List Manager</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
