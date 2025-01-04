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
    Tasks,
    UnlockDashboard
} from "./pages/PageRouter";
import { TokenProvider } from "./TokenContext"; // 引入 TokenProvider
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
    return (
        <TokenProvider>
            <Navbar
                fixed="bottom"
                style={{
                    backgroundColor: "#f8f5f2",
                    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Nav className="w-100 d-flex justify-content-around">
                    <Nav.Link href="/" style={{ color: "#666" }}>
                        主頁
                    </Nav.Link>
                    <Nav.Link href="/diary" style={{ color: "#666" }}>
                        聊天
                    </Nav.Link>
                    <Nav.Link href="/tasks" style={{ color: "#666" }}>
                        任務
                    </Nav.Link>
                    <Nav.Link href="/userInfo" style={{ color: "#666" }}>
                        個人
                    </Nav.Link>
                    <Nav.Link href="/unlock-dashboard" style={{ color: "#666" }}>
                        心理代幣
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Container className="mt-3">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/counsel" element={<Counsel />} />
                        <Route path="/meeting-room" element={<MeetingRoom />} />
                        <Route path="/diary" element={<Diary />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/userInfo" element={<UserInfo />} />
                        <Route path="/unlock-dashboard" element={<UnlockDashboard />} />
                    </Routes>
                </Router>
            </Container>
        </TokenProvider>
    );
}

export default App;
