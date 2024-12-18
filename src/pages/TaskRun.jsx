import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

function TaskRun({ targetDuration = 30, progress }) {
    // 假設進度條為 75%，根據目標時間動態計算目前完成時間
    const percentage = progress || 75; // 預設進度為 75%
    const completedTime = (targetDuration * percentage) / 100;

    return (
        <Card className="mb-4">
            <Card.Header>跑步紀錄</Card.Header>
            <Card.Body>
                <Card.Title>
                    目標時間: {targetDuration} 分鐘
                </Card.Title>
                <Card.Text>
                    已完成時間: {completedTime.toFixed(1)} 分鐘 ({percentage}%)
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
    );
}

export default TaskRun;
