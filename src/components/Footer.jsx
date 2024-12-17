import React from 'react';
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} 心理鏈平台. 保留所有權利.</p>
      </Container>
    </footer>
  );
}

export default Footer;
