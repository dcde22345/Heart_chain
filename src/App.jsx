import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
    Counsel,
    Diary,
    Questionnaire,
    Home,
    MeetingRoom,
    UserInfo,
    TaskPanel,
    TaskRun,
    CouponPage,
} from "./pages/PageRouter";
import { TokenProvider } from "./TokenContext"; // 引入 TokenProvider
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <TokenProvider>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">政心鏈</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/counsel">匿名諮詢</Nav.Link>
                                <Nav.Link as={Link} to="/diary">匿名日記</Nav.Link>
                                <Nav.Link as={Link} to="/taskPanel">心理代幣</Nav.Link>
                                <Nav.Link as={Link} to="/taskRun">進行任務</Nav.Link>
                                <Nav.Link as={Link} to="/userInfo">個人資訊</Nav.Link>
                                <Nav.Link as={Link} to="/coupon">折價券</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="mt-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/counsel" element={<Counsel />} />
                        <Route path="/diary" element={<Diary />} />
                        <Route path="/taskPanel" element={<TaskPanel />} />
                        <Route path="/taskRun" element={<TaskRun />} />
                        <Route path="/userInfo" element={<UserInfo />} />
                        <Route path="/coupon" element={<CouponPage />} />
                    </Routes>
                </Container>
            </Router>
        </TokenProvider>
    );
}

export default App;
