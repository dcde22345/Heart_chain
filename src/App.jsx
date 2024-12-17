import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Counsel, Diary, Questionnaire, Home, MeetingRoom} from './pages/PageRouter'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">心理鏈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/counsel">匿名諮詢</Nav.Link>
              <Nav.Link as={Link} to="/diary">匿名日記</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counsel" element={<Counsel />} />
          <Route path="/meeting-room" element={<MeetingRoom />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
