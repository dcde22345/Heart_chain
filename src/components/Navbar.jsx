import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">心理鏈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">首頁</Nav.Link>
            <Nav.Link href="/tests">心理測試</Nav.Link>
            <Nav.Link href="/counseling">心理諮詢</Nav.Link>
            <Nav.Link href="/token-center">心理代幣中心</Nav.Link>
            <Nav.Link href="/education">心理健康教育</Nav.Link>
            <Nav.Link href="/privacy">隱私管理</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
