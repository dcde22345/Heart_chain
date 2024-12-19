import React from "react";
import { Card, ProgressBar, Container } from "react-bootstrap";
import TaskPanel from "../components/TaskPanel";

function Tasks({ targetDuration = 30, progress }) {
    // 假設進度條為 75%，根據目標時間動態計算目前完成時間
    const percentage = progress || 75; // 預設進度為 75%
    const completedTime = (targetDuration * percentage) / 100;

    return (
        <Container className="mt-5">
            <Container
                fluid
                className="d-flex justify-content-center align-items-center flex-column"
            >
                <p
                    style={{
                        fontSize: "1rem",

                        color: "#6C7A89",
                        fontWeight: "500",
                        margin: "0px",
                        paddingTop: "0.5rem",
                    }}
                >
                    完成任務，獲取心理代幣！
                </p>
            </Container>

            <Container
                fluid
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ marginTop: "10px" }}
            >
                <Card className="mb-4 w-100">
                    <Card.Header>任務紀錄</Card.Header>
                    <Card.Body>
                        <Card.Title>任務：跑步</Card.Title>
                        <Card.Text>目標時間: {targetDuration} 分鐘</Card.Text>
                        <Card.Text>
                            已完成時間: {completedTime.toFixed(1)} 分鐘 (
                            {percentage}%)
                        </Card.Text>
                        <ProgressBar
                            now={percentage}
                            label={`${percentage}%`}
                            striped
                            animated
                            variant="success"
                        />
                    </Card.Body>
                </Card>
            </Container>

            {/* 任務列表 */}
            <Container
                fluid
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ marginTop: "10px" }}
            >
                <TaskPanel />
            </Container>
        </Container>
    );
}

export default Tasks;
