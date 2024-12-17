import React, { useState, useEffect, useCallback } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate

const Counsel = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [isMeetingActive, setIsMeetingActive] = useState(false);

    const navigate = useNavigate(); // 使用 useNavigate 進行跳轉

    // 使用 useCallback 記憶化 checkMeetingTime 函數
    const checkMeetingTime = useCallback(() => {
        if (date && time) {
            const now = new Date();
            const meetingDateTime = new Date(`${date}T${time.split("-")[0]}`);
            if (now >= meetingDateTime) {
                setIsMeetingActive(true);
            }
        }
    }, [date, time]); // 依賴 date 和 time

    useEffect(() => {
        const timer = setInterval(checkMeetingTime, 1000);
        return () => clearInterval(timer);
    }, [checkMeetingTime]); // 依賴記憶化的 checkMeetingTime
    
    const handleSubmit = () => {
        if (date && time) {
            setShowAlert(true);
            setIsMeetingActive(false);
        } else {
            alert("請選擇日期和時段!");
        }
    };

    return (
        <Container
            fluid
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "calc(100vh - 56px)" }}
        >
            <Card
                className="w-100 p-4 shadow-sm mb-4"
                style={{ maxWidth: "500px" }}
            >
                <Card.Title className="fw-bold mb-4">
                    匿名諮詢時段預約
                </Card.Title>
                <Card.Body>
                    <Form>
                        {/* 選擇日期 */}
                        <Form.Group controlId="selectDate" className="mb-3">
                            <Form.Label>選擇諮詢日期</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>

                        {/* 選擇時段 */}
                        <Form.Group controlId="selectTime" className="mb-3">
                            <Form.Label>選擇諮詢時段</Form.Label>
                            <Form.Select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">請選擇時段</option>
                                <option value="09:00-10:00">
                                    09:00 - 10:00
                                </option>
                                <option value="10:00-11:00">
                                    10:00 - 11:00
                                </option>
                                <option value="12:00-13:00">
                                    12:00 - 13:00
                                </option>
                                <option value="13:00-14:00">
                                    13:00 - 14:00
                                </option>
                                <option value="14:00-15:00">
                                    14:00 - 15:00
                                </option>
                                <option value="15:00-16:00">
                                    15:00 - 16:00
                                </option>
                                <option value="16:00-17:00">
                                    16:00 - 17:00
                                </option>
                                <option value="17:00-18:00">
                                    17:00 - 18:00
                                </option>
                                <option value="18:00-19:00">
                                    18:00 - 19:00
                                </option>
                                <option value="19:00-20:00">
                                    19:00 - 20:00
                                </option>
                                <option value="20:00-21:00">
                                    20:00 - 21:00
                                </option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmit}>
                            確認預約
                        </Button>
                    </Form>

                    {/* 預約成功提示 */}
                    {showAlert && (
                        <Alert variant="success" className="mt-4">
                            您已成功預約 {date} 的 {time} 時段！
                        </Alert>
                    )}
                </Card.Body>
            </Card>

            {/* 進入會議室 */}
            <Card
                className="w-100 p-4 shadow-sm mb-4"
                style={{ maxWidth: "500px" }}
            >
                <Card.Title className="fw-bold text-success">
                    進入會議室
                </Card.Title>
                <Card.Body>
                    <p>預約的時間到了嗎？請點擊下方按鈕進入匿名諮詢會議室。</p>
                    <Button
                        variant="success"
                        size="lg"
                        disabled={!isMeetingActive}
                        onClick={() => navigate("/meeting-room")} // 使用 navigate 進行跳轉
                    >
                        {isMeetingActive ? "進入會議室" : "等待時段開始..."}
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Counsel;
