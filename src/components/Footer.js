import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Todo List Manager. All rights reserved.
        </p>
        <small className="text-muted">
          Built with React & Bootstrap
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
